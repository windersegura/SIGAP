import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Propietario} from '../models/aguapotable'
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class AguapotableService {

  constructor(private http: HttpClient,
              private config: ConfigService) { }

  //contribuyentes
  listContribuyentes(params?:any): Observable<Array<Propietario>>{
    const url = `${this.config.appConfig.apiUrl}/propietarios`;
    const options = {
      params: params
    }
    return this.http.get<Array<Propietario>>(url, options)
  }

  createPropietario(propietario: Propietario): Observable<Propietario>{
    const url = `${this.config.appConfig.apiUrl}/propietarios`;
    return this.http.post<Propietario>(url, propietario);
  }

  updateContribuyente(propietario: Propietario): Observable<Propietario>{
      const url = `${this.config.appConfig.apiUrl}/propietarios/${propietario.id_propietario}`
      return this.http.put<Propietario>(url, propietario);
  }
  

}
