import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public appConfig : any;

  constructor() { 
    this.appConfig = {
      server : environment.server,
      apiUrl: environment.server + environment.apiUrl,
    }
  }

}

export const CATALOGO_BARRIOS =[
  {
    id: 1,
    barrio: 'El Centro'
  },
  {
    id: 2,
    barrio: "La Paz"
},
{
    id: 3,
    barrio: "El PAraiso"
},
{
    id: 4,
    barrio: "Las Flores"
},
{
    id: 5,
    barrio: "El Centro 2"
},
{
    id: 6,
    barrio: "San Rafael"
},
{
    id: 7,
    barrio: "San Rafael 2"
}
]

export const CATALOGO_MESES=[
  {
    id: 1,
    mes: 'Enero'
  },
  {
    id: 2,
    mes: 'Febrero',
  },
  {
    id:3,
    mes: 'Marzo',
  },
  {
    id:4,
    mes:'Abril'
  },
  {
    id:5,
    mes: 'Mayo'
  },
  {
    id:6,
    mes:'Junio'
  },
  {
    id:7,
    mes:'Julio'
  },
  {
    id:8,
    mes:'Agosto'
  },
  {
    id:9,
    mes:'Septiembre'
  },
  {
    id:10,
    mes:'Octubre'
  },
  {
    id:11,
    mes: 'Noviembre'
  },
  {
    id:12,
    mes: 'Diciembre'
  }

]
