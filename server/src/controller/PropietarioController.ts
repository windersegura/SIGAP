import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import { Propietario } from '../entity/Propietario';
import { validate } from 'class-validator';


export class PropietarioController{

    //list all propietario

    static listAllPropietario = async (req: Request, res: Response) =>{
        const propietarioRepository = getRepository(Propietario);

        try {
           const propietarios = await propietarioRepository.find();
           res.send(propietarios);
        } catch (e) {
            res.status(404).json({message: 'Not results'});
        }
    }

    static getById = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const propietarioRepository = getRepository(Propietario);
        
        try {
            const propietario = await propietarioRepository.findOneOrFail(id);
            res.send(propietario);
        } catch (e) {
            res.status(404).json({message: 'Propietario no encontrado'})  
        }

    }

    static createPropietario = async (req: Request, res: Response) =>{
        const propietario = new Propietario();
        const {nombres, apellidos, direccion, telefono, dpi} = req.body;
        const propietarioRepository = getRepository(Propietario);

        propietario.nombres = nombres;
        propietario.apellidos = apellidos;
        propietario.direccion = direccion;
        propietario.telefono = telefono;
        propietario.dpi = dpi;

        const errors = await validate(propietario, {validationError:{target: false, value: false}}) 

        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            await propietarioRepository.save(propietario);

        } catch (e) {
            return res.status(400).json({message: 'El dpi ya Existe'})
        }

        // Todo ok

        res.status(200).json({message: 'El Contribuyente fue guardado'});

    }

    static updatePropietario = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const {nombres, apellidos, direccion, telefono, dpi} = req.body;
        let propietario; 
        const propietarioRepository = getRepository(Propietario);

        try {
            propietario = await propietarioRepository.findOneOrFail(id);
            propietario.nombres = nombres;
            propietario.apellidos = apellidos;
            propietario.direccion = direccion;
            propietario.telefono = telefono;
            propietario.dpi = dpi;

        } catch (e) {
            return res.status(404).json({message: 'Propietario no encontrado!'})
        }


        const errors = await validate(propietario, {validationError: {target: false, value: false}});

        if (errors.length >0) {
            return res.status(404).json(errors);
        }

        try {
            await propietarioRepository.save(propietario);
        } catch (e) {
            return res.status(409).json({message: 'El Propietario ya esta en uso'})
        }

        res.status(201).json({message: 'Propietario Actualizado'});

    }

    static deletePropietario = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const propietarioRepository = getRepository(Propietario);
        let propietario: Propietario;

        try{
            propietario = await propietarioRepository.findOneOrFail(id);
        }catch(e){
            return res.status(404).json({message:'Propietario not found!'})
        }

        propietarioRepository.delete(id);
        res.status(201).json({message: 'Propietario deleted'})

    }


}

export default PropietarioController
