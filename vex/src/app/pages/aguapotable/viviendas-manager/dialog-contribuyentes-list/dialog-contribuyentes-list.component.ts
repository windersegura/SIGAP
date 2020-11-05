import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-dialog-contribuyentes-list',
  templateUrl: './dialog-contribuyentes-list.component.html',
  styleUrls: ['./dialog-contribuyentes-list.component.scss']
})
export class DialogContribuyentesListComponent implements OnInit {

  showControltoEmit: boolean;


  constructor(
    public dialogRef: MatDialogRef<DialogContribuyentesListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.showControltoEmit = data.showControltoEmit;
  }

  ngOnInit(): void {
  }

  close (row){
    
    this.dialogRef.close(row);
  }

}
