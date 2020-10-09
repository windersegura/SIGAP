import { getRepository } from 'typeorm';
import { Request,Response } from 'express';
import { User } from '../entity/User';

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

        res.send(user);

    }
}

export default AuthController;