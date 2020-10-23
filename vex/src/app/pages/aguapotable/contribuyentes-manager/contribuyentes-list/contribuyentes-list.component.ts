import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {Propietario} from '../../../../models/aguapotable'
import { MatDialog } from '@angular/material/dialog';
import { ContribuyentesEditComponent } from '../contribuyentes-edit/contribuyentes-edit.component';
import data from '@iconify/icons-ic/twotone-visibility';




@Component({
  selector: 'vex-contribuyentes-list',
  templateUrl: './contribuyentes-list.component.html',
  styleUrls: ['./contribuyentes-list.component.scss']
})
export class ContribuyentesListComponent implements OnInit {

  dataSource = new MatTableDataSource<Propietario>()
  displayedColumns: string[] = [
    'codigo', 'nombres', 'apellidos', 'dpi', 'direccion', 'acciones'
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
   const dialogRef = this.dialog.open(ContribuyentesEditComponent, {
      width:'500px',
      data:{edit: false}
    });
    
    dialogRef.afterClosed().subscribe(data =>{

    }) 
    
  }

}
