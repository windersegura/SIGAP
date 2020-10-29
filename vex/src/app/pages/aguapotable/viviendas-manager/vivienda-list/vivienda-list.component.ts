import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AguapotableService } from '../../../../services/aguapotable.service';
import {Vivienda} from '../../../../models/aguapotable';
import { MatDialog } from '@angular/material/dialog';
import { ViviendaEditComponent } from '../vivienda-edit/vivienda-edit.component';


@Component({
  selector: 'vex-vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrls: ['./vivienda-list.component.scss']
})
export class ViviendaListComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  openDialog(){
    const dialogRef = this.dialog.open(ViviendaEditComponent,{
      width: '900px',
      data: {edit: false}
    })
    
    dialogRef.afterClosed().subscribe(update =>{

    })
    
  }

}
