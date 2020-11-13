import { Component, OnInit, ViewChild } from '@angular/core';
import { CATALOGO_MESES, CATALOGO_BARRIOS } from '../../../../services/config.service';
import { MatTableDataSource } from '@angular/material/table';
import {Pago} from '../../../../models/aguapotable';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AguapotableService } from '../../../../services/aguapotable.service';

@Component({
  selector: 'vex-pagos-list',
  templateUrl: './pagos-list.component.html',
  styleUrls: ['./pagos-list.component.scss']
})
export class PagosListComponent implements OnInit {

  meses = CATALOGO_MESES;
  barrios= CATALOGO_BARRIOS;
  dataSource = new MatTableDataSource<Pago>();

  displayedColumns:string [] = [
    'fecha', 'codigo','mes', 'año','total'
  ]

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageSize = 25;
  length = 0;
  page = 1;

  constructor(
    private aguapotable: AguapotableService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    this.loadPagos();
  }
  
  firstPage() {
    if (this.page !== 1) {
      this.paginator.firstPage();
    } else {
      this.loadPagos();
    }
  }

  pageEvent(page: PageEvent) {
    this.page = page.pageIndex + 1;
    this.pageSize = page.pageSize;
    this.loadPagos();
  }

  loadPagos(){
    this.aguapotable.listPagos().subscribe(data =>{
      this.dataSource.data = data;
    }, err =>{
      console.log(err);
    })
  }

}
