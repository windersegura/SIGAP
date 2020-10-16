import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany} from 'typeorm';
import {MinLength, IsNotEmpty} from 'class-validator';
import{Barrio} from './Barrio'

@Entity()
export class Comunidad {
    @PrimaryGeneratedColumn()
    id_comunidad: number;
    
    @Column()
    comunidad: string

    @OneToMany(type => Barrio, barrio => barrio.comunidad)
    barrios: Barrio [];

}