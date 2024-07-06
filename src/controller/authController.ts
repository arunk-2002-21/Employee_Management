import { Request, Response } from 'express';
import {employeeLoginAuth} from '../services/authenticationServices'


export const loginEmployeeAuth = async (req: Request,res: Response) => {
  const employee = await employeeLoginAuth(req.body);
  res.send(employee);
}