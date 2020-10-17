import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'vex-contribuyentes-list',
  templateUrl: './contribuyentes-list.component.html',
  styleUrls: ['./contribuyentes-list.component.scss']
})
export class ContribuyentesListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
