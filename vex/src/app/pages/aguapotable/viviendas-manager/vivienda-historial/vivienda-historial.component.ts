import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Vivienda } from '../../../../models/aguapotable';

@Component({
  selector: 'vex-vivienda-historial',
  templateUrl: './vivienda-historial.component.html',
  styleUrls: ['./vivienda-historial.component.scss']
})
export class ViviendaHistorialComponent implements OnInit {

  @Output() savedHistorial: EventEmitter<Vivienda> = new EventEmitter()
  @Input() vivienda : Vivienda;
  constructor() { }

  ngOnInit(): void {
    
  }


 return(parameter){
    this.savedHistorial.emit(null);
 }

}
