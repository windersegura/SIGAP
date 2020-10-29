import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import { Vivienda } from '../entity/Vivienda';
import { validate } from 'class-validator';
import { Barrio } from '../entity/Barrio';
import { Propietario } from '../entity/Propietario';
import { Estados } from '../entity/Estados';


export class ViviendaController{
    
    static listAllViviendas = async (req: Request, res: Response) =>{
        const viviendaRepository = getRepository(Vivienda);
        try{
            const viviendas = await viviendaRepository.find({relations: ["propietario","barrio", "estado"]});
            res.send(viviendas);

        }catch(e){
            res.status(404).json({message: 'No hay resultados'});
        }
    }

    static getOneVivienda = async (req: Request, res: Response) => {

    }

    static createVivienda = async (req: Request, res: Response) => {
        const vivienda = new Vivienda();
        const barr = new Barrio();
        const prop = new Propietario();
        const est = new Estados();
        const {barrio, descripcion, propietario, estado,codigo} = req.body;
        const viviendaRepository = getRepository(Vivienda);
        const barrioRepository = getRepository(Barrio);
        const propietarioRepository = getRepository(Propietario)
        const estadoRepository = getRepository(Estados)
        
        if(barrio){
            try{
               const temp = await barrioRepository.findOneOrFail(barrio);
               barr.id_barrio = temp.id_barrio;
               barr.barrio = temp.barrio;
               barr.comunidad = temp.comunidad;
               vivienda.barrio = barr;

            }catch(e){
                res.status(404).json({message: 'Barrio no encontrado'});
            }
        }else{
            return res.status(400).json({message: 'Falta el barrio para la vivienda'})

        }

        if(propietario){
            try {
                const temp = await propietarioRepository.findOneOrFail(propietario);
                prop.id_propietario = temp.id_propietario;
                prop.nombres = temp.nombres;
                prop.apellidos = temp.apellidos;
                prop.direccion = temp.direccion;
                prop.telefono = temp.telefono;
                prop.dpi = temp.dpi
                vivienda.propietario = prop
            } catch (e) {
                res.status(404).json({message: 'Propietaro no encontrado'});
                
            }
        }else{
            return res.status(400).json({message: 'Falta el propietario para la vivienda'})
        }

        if(estado){
            try {
                const temp = await estadoRepository.findOneOrFail(estado);
                est.id_estado = temp.id_estado;
                est.Estado = temp.Estado;
                vivienda.estado = est;
            } catch (e) {
                res.status(404).json({message: 'Estado no encontrado'})
            }
        }else{
            return res.status(400).json({message: 'Falta el estado para la vivienda'});
        }
        
        vivienda.descripcion = descripcion;
        vivienda.codigo = codigo;
        
        const errors = await validate(Vivienda, {validationError:{target: false, value: false}}) 

        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            await viviendaRepository.save(vivienda);

        } catch (e) {
            return res.status(400).json({message: 'Error al crear la vivienda'});
        }

        res.status(200).json({message: 'La Vivienda fue guardada'});


    }

    static updateVivienda = async (req: Request, res: Response) => {

    }

    static deleteVivienda = async (req: Request, res: Response) =>{

    }
    

}
