import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-dialog-viviendas-list',
  templateUrl: './dialog-viviendas-list.component.html',
  styleUrls: ['./dialog-viviendas-list.component.scss']
})
export class DialogViviendasListComponent implements OnInit {

    showControlEmit: boolean;
  constructor(
    public dialogRef: MatDialogRef<DialogViviendasListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.showControlEmit = data.showControlEmit;
  }

  ngOnInit(): void {
  }

  onClose(row){
    this.dialogRef.close(row);
  }
}
