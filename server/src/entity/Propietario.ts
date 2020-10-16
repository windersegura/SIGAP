import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import {MinLength, IsNotEmpty} from 'class-validator';
import { Vivienda } from './Vivienda';

@Entity()
export class Propietario {
    @PrimaryGeneratedColumn()
    id_propietario: number;

    @Column()
    @IsNotEmpty()
    nombres: string;

    @Column()
    @IsNotEmpty()
    apellidos: string;

    @Column()
    @IsNotEmpty()
    direccion: string;

    @Column()
    telefono: string;

    @Column()
    @IsNotEmpty()
    dpi: string
    
    @OneToMany(type => Vivienda, vivienda => vivienda.propietario)
    viviendas: Vivienda[];
}