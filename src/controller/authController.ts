import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Employee from '../models/Employee';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req: Request, res: Response) => {
  const { name, email, password, assignedShiftHours, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = await Employee.create({ name, email, password: hashedPassword, assignedShiftHours, role });
    res.status(201).json({ message: 'Employee registered successfully', employee });
  } catch (error) {
    res.status(500).json({ message: 'Error registering employee', error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const employee = await Employee.findOne({ where: { email } });
    if (!employee || !(await bcrypt.compare(password, employee.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: employee.id, role: employee.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
