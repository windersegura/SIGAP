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
