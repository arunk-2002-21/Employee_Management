import { Router, Request, Response } from "express";
import { addNewEmployee } from "../controller/createEmployee";
const createEmployeeRoute = Router();

createEmployeeRoute.post('/', async (req: Request, res: Response) =>{
    try{
        const newEmployee: any= await addNewEmployee(req,res);
        res.send(newEmployee);
    } catch(error){
        console.log('Error in creating an employee account', error);
    }
})

export {createEmployeeRoute};