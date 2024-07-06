import { Request, Response } from 'express';
import { timeSheet } from '../services/timeSheet';

export const timeSheetGenerate = async (req: Request, res: Response)=> {
  const timesheet = await timeSheet(req.body);
  res.send(timesheet);
}