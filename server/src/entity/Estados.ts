import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import {MinLength, IsNotEmpty} from 'class-validator';
import { Vivienda } from './Vivienda';
import { Pago } from './Pago';

@Entity()
export class Estados {
    @PrimaryGeneratedColumn()
    id_estado: number;

    @Column()
    @IsNotEmpty()
    Estado: string;
    
    @OneToMany(type =>Vivienda, vivienenda => vivienenda.estado)
    viviendas: Vivienda[];

}