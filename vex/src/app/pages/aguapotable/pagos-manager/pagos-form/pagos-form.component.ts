import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Vivienda} from '../../../../models/aguapotable';
import { AguapotableService } from '../../../../services/aguapotable.service';
import { CATALOGO_MESES } from '../../../../services/config.service';
import { MatDialog } from '@angular/material/dialog';
import { ViviendaListComponent } from '../../viviendas-manager/vivienda-list/vivienda-list.component';
import { DialogViviendasListComponent } from '../dialog-viviendas-list/dialog-viviendas-list.component';
import Swal from 'sweetalert2';
import{Pago} from '../../../../models/aguapotable';

@Component({
  selector: 'vex-pagos-form',
  templateUrl: './pagos-form.component.html',
  styleUrls: ['./pagos-form.component.scss']
})
export class PagosFormComponent implements OnInit {

  form: FormGroup;
  vivienda : Vivienda;
  pago: Pago;

  meses= CATALOGO_MESES;
  constructor(
      private fb: FormBuilder,
      private aguapotableService: AguapotableService,
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
        codigo: [null,[]],
        propietario:[null,[]],
        descripcion:[null,[]],
        vivienda:[null,[]],
        estado: [null,[]],
        mes: [null,[]],
        año: [null, []],
        monto: [null,[]],
        mora: [null,[]],
        total: [null,[]],

    })

  }
  
  save(){

    this.pago = this.form.value;

    this.aguapotableService.createPago(this.pago).subscribe(data => {
      this.pago = data as Pago;
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: 'El pago ha sido generado con exito',
      })
    }, err => {
      Swal.fire({
        icon: 'error',
            title: 'Oops...',
            text: 'Ocurrio un error al generar el pago',
      })
    })


  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogViviendasListComponent, {
       width:'900px',
       height:'500px',
       data:{showControlEmit:true}
     });
     
     dialogRef.afterClosed().subscribe(vivienda =>{
       
         if (vivienda){
           
           this.form.patchValue({codigo: vivienda.codigo});
           this.form.patchValue({propietario: vivienda.propietario.nombres});
           this.form.patchValue({descripcion: vivienda.descripcion});
           this.form.patchValue({estado: vivienda.estado.Estado});
           this.form.patchValue({vivienda: vivienda.id_vivienda})
          
         }
 
     }) 
     
   }

}
