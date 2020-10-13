import { getRepository } from 'typeorm';
import { Request,Response } from 'express';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

class AuthController{
    static login = async (req: Request, res: Response) =>{
        const {user_name, pass} = req.body;
        if(!(user_name && pass)){
           return res.status(400).json({message: 'Username & Password required!'});
        }

        const userRepository = getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail({where:{user_name}})

        }catch(e){
            return res.status(400).json({message: 'Username or Password incorrect!'})
        }

        //check password
        if(!user.checkPassword(pass)){
            return res.status(400).json({message: 'Username or password incorrect'})
        }

        const token = jwt.sign({userId: user.id, username: user.user_name}, config.jwtSecret, {expiresIn: '1h'})
        
        res.json({message: 'OK', token});

    }
}

export default AuthController;