import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, OneToMany} from 'typeorm';
import {MinLength, IsNotEmpty} from 'class-validator';
import { Barrio } from './Barrio';
import { Propietario } from './Propietario';
import { Estados } from './Estados';
import { Pago } from './Pago';


@Entity()
@Unique(['codigo'])
export class Vivienda {
   
    @PrimaryGeneratedColumn()
    id_vivienda: number;

    @Column()
    codigo: number;
    
    @ManyToOne(type=> Barrio, barrio => barrio.viviendas )
    barrio: Barrio;

    @Column()
    descripcion: string;
    
    @ManyToOne(type => Propietario, propietario => propietario.viviendas)
    propietario: Propietario;

    @ManyToOne(type => Estados, estados => estados.viviendas)
    estado: Estados;

    @OneToMany(type => Pago, pago => pago.vivienda)
    pagos: Pago[];

    @Column()
    solvencia: boolean;
}