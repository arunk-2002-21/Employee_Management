import { Request, Response } from "express";
import { employeeLogin } from "../services/login";


export const loginEmployee = async(req: Request, res: Response)=>{
    const employee = await employeeLogin(req.body);
    res.cookie('token', employee,{ httpOnly: true })
    res.send(employee);
}