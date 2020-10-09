import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import{validate} from 'class-validator';

export class UserController {

   //Get all
   static listUsers = async (req: Request, res: Response) =>{
       const userRepository = getRepository(User);
       const users = await userRepository.find();
        
       if(users.length > 0){
            res.send(users);
       }else{
            res.status(400).json({message: 'Not result'});
       }

   }

    //Get by id
    static getById = async (req: Request, res: Response)=>{
        const {id} = req.params;
        const userRepository = getRepository(User);
        try{
            const user = await userRepository.findOneOrFail(id);
            res.send(user)
        }catch(e){
            res.status(404).json({message: 'No result'});
        }

    }

    //Create User
    static newUSer = async (req:Request, res:Response) =>{
        const {user_name, pass, role} = req.body;
        const user = new User();

        user.user_name = user_name;
        user.pass = pass;
        user.role = role;

        //validate
        const errors = await validate(user);
        if(errors.length > 0){
            return res.status(400).json(errors);
        }

        //Hash Password

        const userRepository = getRepository(User);
        try{
            await userRepository.save(user);
        }catch(e){
            return res.status(409).json({message: 'Username alrady exist!'});    
        }

        //all ok
        res.send('User Created');

    }

    static editUser = async (req: Request, res: Response) =>{
        let user;
        const {id} = req.params;
        const {user_name, role} = req.body;

        const userRepository = getRepository(User);

        try{
            user = await userRepository.findOneOrFail(id);
            user.user_name = user_name;
            user.role = role;
        }catch(e){
            return res.status(404).json({message: 'User not found!'})
        }

        
        const errors = await validate(user);

        if(errors.length > 0){
            return res.status(404).json(errors)
        }

        //try to save user
        try{
            await userRepository.save(user);
        }
        catch(e){
            return res.status(409).json({message: 'Username alredy in use'})
        }

        res.status(201).json({message: 'User update'});

    }

    static deleteUser = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const userRepository = getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail(id);
        }catch(e){
            return res.status(404).json({message:'User not found!'})
        }

        userRepository.delete(id);
        res.status(201).json({message: 'User deleted'})

    }


}

export default UserController;