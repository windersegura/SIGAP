import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Vivienda} from '../../../../models/aguapotable';
import { AguapotableService } from '../../../../services/aguapotable.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CATALOGO_BARRIOS } from '../../../../services/config.service';
import { ContribuyentesListComponent } from '../../contribuyentes-manager/contribuyentes-list/contribuyentes-list.component';



@Component({
  selector: 'vex-vivienda-edit',
  templateUrl: './vivienda-edit.component.html',
  styleUrls: ['./vivienda-edit.component.scss']
})
export class ViviendaEditComponent implements OnInit {

  edit: boolean = false;
  form: FormGroup;
  vivienda: Vivienda;
 
  data_barrios = CATALOGO_BARRIOS;

  constructor(
      public dialogRef: MatDialogRef<ViviendaEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data : any,
      private fb: FormBuilder,
      private _snacBar : MatSnackBar,
      private aguapotableService : AguapotableService,
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group(
      {
        id_vivienda: [null,[]],
        barrio: [null, [Validators.required]],
        descripcion: [null, []],
        propietario: [null, [Validators.required]],
        estado: [null, []],
        codigo: [null, [Validators.required]],
        nombres: [null,[]],
        apellidos: [null, []],
        direccion: [null, []],
        telefono: [null, []],
        dpi: [null, []]

      }
    )
  }

  loadPropietarios(){

  }

  openDialog(){
    const dialogRef = this.dialog.open(ContribuyentesListComponent, {
       width:'900px',
       height:'500px',
       data:{showControltoEmit: true}
     });
     
     dialogRef.afterClosed().subscribe(data =>{
       
         
 
     }) 
     
   }


  onClose(){
    this.dialogRef.close();

  }


}
