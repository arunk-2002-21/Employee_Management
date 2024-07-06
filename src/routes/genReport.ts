import { Router, Request, Response } from 'express';
import { newReport } from '../controller/genReport';
const generateReportRouter = Router();

generateReportRouter.post('/', async (req: Request, res: Response)=> {
    try{
        const newEmployee: any = await newReport(req,res);
        res.send(newEmployee);
    } catch(error){
        console.log('Error in generating report data');
    }
})

export {generateReportRouter};
