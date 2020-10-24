import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Propietario } from '../../../../models/aguapotable'
import { AguapotableService } from '../../../../services/aguapotable.service';


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
    private aguapotableService: AguapotableService)
   { }

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

    if(this.data.edit){
      this.edit = this.data.edit;
    }
  }
    
    saveContrib(){
      this.propietario = this.form.value;
      console.log(this.propietario);
      this.aguapotableService.createPropietario(this.propietario).subscribe(data=>{
        console.log(data);
      })

    }
    
    onClose(){
      this.dialogRef.close();
    }
}
