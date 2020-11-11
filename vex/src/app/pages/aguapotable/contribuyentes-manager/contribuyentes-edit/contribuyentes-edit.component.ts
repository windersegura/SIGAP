import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Propietario } from '../../../../models/aguapotable'
import { AguapotableService } from '../../../../services/aguapotable.service';
import Swal from 'sweetalert2';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'vex-contribuyentes-edit',
  templateUrl: './contribuyentes-edit.component.html',
  styleUrls: ['./contribuyentes-edit.component.scss']
})
export class ContribuyentesEditComponent implements OnInit {

  edit: boolean = false;
  form: FormGroup
  propietario: Propietario;

  constructor(
    public dialogRef: MatDialogRef<ContribuyentesEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private aguapotableService: AguapotableService)
   { 
     
     if(data.propietario){
     
       this.propietario = data.propietario;
     }

   }

  ngOnInit(): void {
    
    this.form = this.fb.group(
      {
        id_propietario: [null, []],
        nombres: [null,[Validators.required]],
        apellidos: [null, [Validators.required]],
        direccion: [null, [Validators.required]],
        telefono: [null, []],
        dpi: [null, [Validators.required]]
      }
    )

    if(this.propietario){
      this.form.patchValue(new Propietario(this.propietario))
    }
    
    if(this.data.edit){
      this.edit = this.data.edit;
    }
  }
    
  saveContrib(){
      this.propietario = this.form.value;
      //console.log(this.propietario);
      if(this.propietario.id_propietario){
        this.aguapotableService.updateContribuyente(this.propietario).subscribe(data =>{
          this.propietario = data as Propietario;
          this._snackBar.open('Los datos han sido Actualizados', 'Aceptar', {duration:2000});
        }, err =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido Actualizar la Informacion'
          });
        })
      }else{
        this.aguapotableService.createPropietario(this.propietario).subscribe(data =>{

          Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'Los datos han sido guardados',
          })
           
          //this._snackBar.open('Los datos han sido guardados!', 'Aceptar', {duration: 2000});
  
        },err =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credenciales incorrectas',
          })
        }
        );
      }
      

    }
    
    onClose(){
      this.dialogRef.close();
    }
}
