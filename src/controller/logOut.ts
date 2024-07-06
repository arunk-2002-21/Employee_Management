import { Request, Response } from "express";
import { employeeLogout } from "../services/logout";


export const logoutEmployee = async (req: Request, res: Response)=>{
    const employee = await employeeLogout(req.body);
    res.clearCookie('token')
    res.send(employee)
}