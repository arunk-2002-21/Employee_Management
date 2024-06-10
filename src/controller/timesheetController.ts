// src/controllers/timesheetController.ts
import { Request, Response } from 'express';
import Timesheet from '../models/Timesheet';
import { AuthRequest } from '../services/auth';

export const createTimesheetEntry = async (req: AuthRequest, res: Response) => {
  const { shiftId, projectName, taskName, fromDate, toDate } = req.body;
  try {
    const timesheet = await Timesheet.create({
      employeeId: req.employee.id,
      shiftId,
      projectName,
      taskName,
      fromDate,
      toDate,
    });
    res.status(201).json({ message: 'Timesheet entry created', timesheet });
  } catch (error) {
    res.status(500).json({ message: 'Error creating timesheet entry', error });
  }
};
