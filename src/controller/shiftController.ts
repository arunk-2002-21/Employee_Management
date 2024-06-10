import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Shift from '../models/Shift';
import { AuthRequest } from '../services/auth';

export const startShift = async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const shift = await Shift.create({
      employeeId: req.employee.id,
      startTime: new Date(),
      endTime: new Date(), 
      actualHours: 0 
    });
    res.status(201).json({ message: 'Shift started', shift });
  } catch (error) {
    res.status(500).json({ message: 'Error starting shift', error });
  }
};

export const endShift = async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const shift = await Shift.findOne({ 
      where: { 
        employeeId: req.employee.id, 
        endTime: { [Op.is]: null } // Use Sequelize's Op.is operator
      }
    });
    if (!shift) {
      return res.status(404).json({ message: 'No active shift found' });
    }
    shift.endTime = new Date();
    const diffMs = shift.endTime.getTime() - shift.startTime.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    shift.actualHours = diffHours;
    await shift.save();
    res.status(200).json({ message: 'Shift ended', shift });
  } catch (error) {
    res.status(500).json({ message: 'Error ending shift', error });
  }
};
