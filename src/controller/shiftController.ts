import { Request, Response } from 'express';
import { generateShiftData } from '../services/shiftData';


export const shiftDataGenerate = async (req: Request, res: Response)=> {
   const shiftData = await generateShiftData(req.body);
   res.send(shiftData);
}