import { Request, Response } from "express";
import { createNewEmployee } from "../services/createEmployeeServices";


export const addNewEmployee = async (req: Request, res: Response)=>{
    const employee = await createNewEmployee(req.body);
    res.send(employee);
}