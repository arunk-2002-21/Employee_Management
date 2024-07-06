import { Request, Response } from "express";
import { generateReportData } from "../services/genReport";


export const newReport = async( req: Request, res: Response)=>{
    const shiftData = await generateReportData(req, res);
    res.send(shiftData);
}