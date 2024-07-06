import { Router, Request, Response } from 'express';
import { loginEmployeeAuth } from '../controller/authController';
const authenticationRoute = Router();

authenticationRoute.post('/', async (req: Request, res: Response) => {
    try{
        const employeeData: any = await loginEmployeeAuth(req, res);
        res.send(employeeData)
    } catch(error){
        console.log('Error in login employee account', error);
    }
})

export {authenticationRoute};
