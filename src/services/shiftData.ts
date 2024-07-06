import Employee from "../models/Employee";
import Shift from "../models/Shift";
import credentails from "../common/credentails";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import jwt from "jsonwebtoken";
import {CreatedAt} from 'sequelize-typescript';

export async function generateShiftData(data: any) {
    try{
        const sT: any= `${data.startT.hour}:${data.startT.min}`;
        const eT: any= `${data.endT.hour}:${data.endT.min}`;
        const actualH : any = `${Math.abs(Math.abs(data.endT.hour - data.startT.hour))}:${Math.abs(60-data.startT.min) + data.endT.min}`
        const timeSheetData = await Shift.create({
            id: uuidv4(),
            employeeId: data.empId,
            startTime: sT,
            endTime: eT,
             actualHours: actualH
        })
        return timeSheetData;
    } catch(error) {
        console.log('Error in generate shift data', error);
    }
}