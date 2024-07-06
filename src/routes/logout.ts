import { Router, Request, Response } from "express";
import { logoutEmployee } from "../controller/logOut";
const logoutRoute = Router();

logoutRoute.post('/', async(req: Request, res: Response) => {
    try{
        const employeelogout: any= await logoutEmployee(req, res);
        res.send(employeelogout);
    }
    catch(error){
        console.log('Error ion logout employee acccount');
    }
})
export {logoutRoute};