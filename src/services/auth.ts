import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Employee from '../models/Employee';
import dotenv from 'dotenv';

dotenv.config();

export interface AuthRequest extends Request {
  employee?: any;
}

export const authenticateJWT = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const employee = await Employee.findByPk(decoded.id);
    if (!employee) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.employee = employee;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
