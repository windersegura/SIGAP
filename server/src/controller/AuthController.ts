import { getRepository } from 'typeorm';
import { Request,Response } from 'express';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

class AuthController{
    static login = async (req: Request, res: Response) =>{
        const {email, pass} = req.body;
        if(!(email && pass)){
           return res.status(400).json({message: 'Username & Password required!'});
        }

        const userRepository = getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail({where:{email}})

        }catch(e){
            return res.status(400).json({message: 'Username or Password incorrect!'})
        }

        //check password
        if(!user.checkPassword(pass)){
            return res.status(400).json({message: 'Username or password incorrect'})
        }

        const token = jwt.sign({userId: user.id, email: user.email}, config.jwtSecret, {expiresIn: '1h'})
        
        res.json({message: 'OK', token});

    }
}

export default AuthController;