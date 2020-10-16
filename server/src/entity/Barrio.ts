import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, OneToMany} from 'typeorm';
import {MinLength, IsNotEmpty} from 'class-validator';
import {Comunidad} from './Comunidad';
import { Vivienda } from './Vivienda';


@Entity()
export class Barrio {
    @PrimaryGeneratedColumn()
    id_barrio: number;

    @Column()
    barrio: string;

    @ManyToOne(type => Comunidad, comunidad => comunidad.barrios)
    comunidad : Comunidad;

    @OneToMany(type => Vivienda, vivienda => vivienda.barrio)
    viviendas: Vivienda[];


}