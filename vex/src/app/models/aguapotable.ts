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

export interface iVivienda {
    id: string;
    barrio: any;
    descripcion: string;
    propietario: any;
    estado: any;  
    codigo: number;
}

export class Vivienda implements iVivienda{
    id: string;
    barrio:any;
    descripcion: string;
    propietario: any;
    estado: any;
    codigo: number;

    constructor (vivienda: Vivienda){
        if(vivienda){
            this.id = vivienda.id;
            this.barrio = vivienda.barrio;
            this.descripcion = vivienda.descripcion;
            this.propietario = vivienda.propietario;
            this.estado = vivienda.estado;
            this.codigo = vivienda.codigo;
        
        }else{
            this.id = null;
            this.barrio = null;
            this.descripcion = null;
            this.propietario = null;
            this.estado = null;
            this.codigo = null;
        }
    }

}