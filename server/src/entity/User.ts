import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import{MinLength, IsNotEmpty} from 'class-validator';
import * as bcryptjs from 'bcryptjs';
//Todo is Email

@Entity()
@Unique(['user_name', 'email'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(6)
    user_name: string;

    @Column()
    email: string;

    @Column()
    @MinLength(6)
    pass: string;

    @Column()
    @IsNotEmpty()
    role: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;


    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    hashPassword() : void {
        const salt = bcryptjs.genSaltSync(10);
        this.pass = bcryptjs.hashSync(this.pass, salt);
    }

    checkPassword(password: string) : boolean {
        return bcryptjs.compareSync(password, this.pass)
    }

}
