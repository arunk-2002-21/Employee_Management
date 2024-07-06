import { Router, Request, Response } from 'express';
import { shiftDataGenerate } from '../controller/shiftController';
const shiftDataRouter = Router();

shiftDataRouter.post('/', async (req: Request, res: Response)=> {
    try{
        const shiftData: any = await shiftDataGenerate(req, res);
        res.send(shiftData);
    }
    catch(error){
        console.log('Error in generate shift data', error);
    }
})

export {shiftDataRouter};
