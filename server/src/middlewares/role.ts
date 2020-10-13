import {Request, Response, NextFunction} from 'express';
import { User } from '../entity/User';
import { getRepository } from 'typeorm';

export const checkRole = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) =>{
        const {userId} = res.locals.jwtPayload;
        const userRepository = getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail(userId);

        }catch(e){
            return res.status(401).json({message: 'No autorizado'});
        }

        //check
        const {role} = user;
        if(role.includes(role)){
            next();
        } else {
            res.status(401).json({message: 'No autorizado'})
        }
    }
}