import { Router, Request, Response } from "express";
import { loginEmployee } from "../controller/loginEmployee";
const loginRoute = Router();

loginRoute.post('/', async (req: Request, res: Response)=>{
    try{
        const employeeData: any = await loginEmployee(req, res);
        res.send(employeeData);
    } catch(error){
        console.log('Error in login employee account', error);
    }
})

export {loginRoute};
