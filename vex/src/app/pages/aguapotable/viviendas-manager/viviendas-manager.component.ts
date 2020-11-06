import { Component, OnInit } from '@angular/core';
import { Vivienda } from '../../../models/aguapotable';


@Component({
  selector: 'vex-viviendas-manager',
  templateUrl: './viviendas-manager.component.html',
  styleUrls: ['./viviendas-manager.component.scss']
})
export class ViviendasManagerComponent implements OnInit {

  modo =1;
  vivienda : Vivienda

  constructor() { }

  ngOnInit(): void {
  }


  selectedVivienda(vivienda: Vivienda){
    if(vivienda){
      this.vivienda = vivienda;
    }else{
      this.vivienda = new Vivienda(vivienda);
    }
    
    this.modo = 2;
  }

  savedVivienda(vivienda: any){
    this.modo = 1;
  }

}
