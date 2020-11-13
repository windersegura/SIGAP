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
    id_vivienda: string;
    barrio: any;
    descripcion: string;
    propietario: any;
    estado: any;  
    codigo: number;
}

export class Vivienda implements iVivienda{
    id_vivienda: string;
    barrio:any;
    descripcion: string;
    propietario: any;
    estado: any;
    codigo: number;

    constructor (vivienda: Vivienda){
        if(vivienda){
            this.id_vivienda = vivienda.id_vivienda;
            this.barrio = vivienda.barrio;
            this.descripcion = vivienda.descripcion;
            this.propietario = vivienda.propietario;
            this.estado = vivienda.estado;
            this.codigo = vivienda.codigo;
        
        }else{
            this.id_vivienda = null;
            this.barrio = null;
            this.descripcion = null;
            this.propietario = null;
            this.estado = null;
            this.codigo = null;
        }
    }

}

export interface iPago{
    id_pago: number;
    vivienda: number;
    monto: number;
    mora: number;
    total: number;
    estado: any;
    mes: number;
    anio: string;
   
}

export class Pago implements iPago{
    id_pago:number;
    vivienda: number;
    monto: number;
    mora: number;
    total: number;
    estado: any;
    mes: number;
    anio: string;
    

    constructor(pago: Pago){
        if(pago){
            this.id_pago = pago.id_pago;
            this.vivienda = pago.vivienda;
            this.monto = pago.monto;
            this.mora = pago.mora;
            this.total = pago.total;
            this.estado = pago.estado;
            this.mes = pago.mes;
            this.anio = pago.anio;
            
        }else{
            this.id_pago=null;
            this.vivienda = null;
            this.monto = null;
            this.mora = null;
            this.total = null;
            this.estado = null;
            this.mes = null;
            this.anio = null;
        }
    }

}