import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {Propietario} from '../../../../models/aguapotable'
import { MatDialog } from '@angular/material/dialog';
import { ContribuyentesEditComponent } from '../contribuyentes-edit/contribuyentes-edit.component';
import data from '@iconify/icons-ic/twotone-visibility';
import { AguapotableService } from '../../../../services/aguapotable.service';

@Component({
  selector: 'vex-contribuyentes-list',
  templateUrl: './contribuyentes-list.component.html',
  styleUrls: ['./contribuyentes-list.component.scss']
})
export class ContribuyentesListComponent implements OnInit {

  dataSource = new MatTableDataSource<Propietario>()
  displayedColumns: string[] = [
    'nombres', 'apellidos', 'dpi', 'direccion', 'acciones'
  ]

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageSize = 25;
  length = 0;
  page = 1;



  constructor(public dialog: MatDialog,
              private aguapotableService: AguapotableService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    this.loadPropietarios();
  }


  firstPage() {
    if (this.page !== 1) {
      this.paginator.firstPage();
    } else {
      this.loadPropietarios();
    }
  }

  pageEvent(page: PageEvent) {
    this.page = page.pageIndex + 1;
    this.pageSize = page.pageSize;
    this.loadPropietarios();
  }

  loadPropietarios(){

    this.aguapotableService.listContribuyentes().subscribe(
      data =>{
          //console.log(data)
          this.dataSource.data = data;
    }, err =>{
      console.log(err);
    })

    
  
  }

  openDialog(){
   const dialogRef = this.dialog.open(ContribuyentesEditComponent, {
      width:'500px',
      data:{edit: false}
    });
    
    dialogRef.afterClosed().subscribe(data =>{
      
        this.loadPropietarios();

    }) 
    
  }

}
