import {DecimalPipe} from '@angular/common';


export interface iPropietario{
    id_propietario: number;
    nombres: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    dpi: string;
}

export class Propietario implements iPropietario{
    id_propietario: number;
    nombres: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    dpi: string;

    constructor(propietario: Propietario){
        if(propietario){
            this.id_propietario = propietario.id_propietario;
            this.nombres= propietario.nombres;
            this.apellidos = propietario.apellidos;
            this.direccion = propietario.direccion;
            this.telefono = propietario.telefono;
            this.dpi = propietario.dpi;
        }else{
            this.nombres = null;
            this.apellidos = null;
            this.direccion = null;
            this.direccion = null;
            this.telefono = null;
            this.dpi = null;
        }
    }

}