import Employee from "../models/Employee";
import credentails from "../common/credentails";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
export async function employeeLogout(data: any) {
    try{
        const date = new Date();
        const min = data.getMinutes();
        const hour = date.getHours();

        return {
            "endTime": {
                "Min": min,
                "hour": hour,
            }
        }
    } catch(error){
        console.log('Error occured during employee logout', error);
        throw new Error('Logout Failed');
    }
}