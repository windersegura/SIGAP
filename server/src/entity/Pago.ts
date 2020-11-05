import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, CreateDateColumn} from 'typeorm';
import {MinLength, IsNotEmpty} from 'class-validator';
import { Vivienda } from './Vivienda';
import { Estados } from './Estados';

@Entity()
export class Pago{
    @PrimaryGeneratedColumn()
    id_pago: number;

    @ManyToOne(type => Vivienda, vivienda => vivienda.pagos)
    vivienda: Vivienda;
    
    @Column()
    @IsNotEmpty()
    monto: number;

    @Column()
    mora: number;

    @Column()
    @IsNotEmpty()
    total: number;

    @Column()
    @CreateDateColumn()
    fecha: Date;

    @ManyToOne(type => Estados, estados => estados.pagos)
    @IsNotEmpty()
    estado: Estados;


}