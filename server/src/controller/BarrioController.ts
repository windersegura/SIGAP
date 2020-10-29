import { getRepository } from 'typeorm';
import {Request, Response} from 'express';
import {Barrio} from '../entity/Barrio';


export class BarrioController {

    static listAllBarrio = async (req: Request, res: Response) =>{
        const barrioRepository = getRepository(Barrio);

        try {
            const barrios = await barrioRepository.find();
            res.send(barrios);
        } catch (e) {
            res.status(400).json({message: 'No Results'})
        }
    }
}