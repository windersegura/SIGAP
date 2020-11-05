import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import { Pago } from '../entity/Pago';
import { Estados } from '../entity/Estados';
import { Vivienda } from '../entity/Vivienda';
import { validate } from 'class-validator';


export class PagoController {

    static listAllPagos = async (req:Request, res: Response) =>{
        const pagoRepository = getRepository(Pago);
        try {
            const pagos = await pagoRepository.find({relations:["vivienda"]});
            res.send(pagos);
        } catch (e) {
            res.status(404).json({message: 'Error al recuperar el listado de pagos'})
        }
    }


    static createPago = async(req: Request, res: Response) => {
        const pagoRepository = getRepository(Pago);
        const estadosRepository = getRepository(Estados)
        const viviendaRepository = getRepository(Vivienda);
        const pago = new Pago();
        const residencia = new Vivienda();
        const est = new Estados();
        const {vivienda, monto, mora, total, estado} = req.body;

        if(vivienda){
            try {
                const viviendas = await viviendaRepository.findOneOrFail(vivienda);
                residencia.id_vivienda = viviendas.id_vivienda;
                residencia.codigo = viviendas.codigo;
                residencia.barrio = viviendas.barrio;
                residencia.descripcion = viviendas.descripcion;
                residencia.propietario = viviendas.propietario;
                residencia.estado = viviendas.estado;
                pago.vivienda = residencia;
            } catch (e) {
                res.status(404).json({message:'Vivienda no encontrada'});
            }
        }else{
            return res.status(400).json({message: 'Falta especificar la vivienda'})
        }
        
        if(estado){
            try {
                const estados = await estadosRepository.findOneOrFail(estado);
                est.id_estado = estados.id_estado;
                est.Estado = estados.Estado;
                pago.estado = est;
            } catch (e) {
                res.status(404).json({message:'El estado especificado no existe'})
            }
        }else{
            return res.status(400).json({message: 'Falta especificar el estado'})
        }


        pago.monto = monto;
        pago.mora = mora;
        pago.total = total;
       
        const errors = await validate(Pago, {validationError:{target: false, value: false}});

        if(errors.length > 0){
            return res.status(400).json(errors);
        }


        try {
            await pagoRepository.save(pago);

        } catch (e) {
            return res.status(400).json({message: 'Error al registrar el pago'});
        }

        res.status(200).json({message: 'El pago fue registrado'});

    }
}