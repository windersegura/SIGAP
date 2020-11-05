import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AguapotableService } from '../../../../services/aguapotable.service';
import {Vivienda} from '../../../../models/aguapotable';
import { MatDialog } from '@angular/material/dialog';
import { ViviendaEditComponent } from '../vivienda-edit/vivienda-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'vex-vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrls: ['./vivienda-list.component.scss']
})
export class ViviendaListComponent implements OnInit {

  dataSource = new MatTableDataSource<Vivienda>();
  displayedColumns:string [] = [
    'codigo', 'propietario', 'descripcion', 'estado', 'acciones'
  ]


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageSize = 25;
  length = 0;
  page = 1;

  constructor(
    private dialog: MatDialog,
    private aguapotableService: AguapotableService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    this.loadViviendas();
  }

  firstPage() {
    if (this.page !== 1) {
      this.paginator.firstPage();
    } else {
      this.loadViviendas();
    }
  }

  pageEvent(page: PageEvent) {
    this.page = page.pageIndex + 1;
    this.pageSize = page.pageSize;
    this.loadViviendas();
  }

  loadViviendas(){
      this.aguapotableService.listViviendas().subscribe(data =>{
        this.dataSource.data = data;
        //console.log(this.dataSource.data);
        
      }, err => {
        console.log(err);
      })
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
