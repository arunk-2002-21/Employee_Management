import Claims from "../models/Claims";
import { Report } from "../models/Report";
import credentails from "../common/credentails";
import { Request, Response } from "express";
import excelJS from 'exceljs';
import { Workbook } from "exceljs";
import bcrypt from 'bcrypt';
import { v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';

export async function generateReportData(req : Request, res: Response) {
    try{
        const date = new Date();
        const todayDate: any = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        console.log(todayDate)
        const reportData = await Report.create({
            id: uuidv4(),
            EmployeeId: req.body.empId,
            actualhours: req.body.actHours,
            assignedHours: req.body.assHours,
            date: todayDate
        })

        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Report Data');
        worksheet.columns = [
            {header: 'ID', key: 'id', width: 36},
            {header: 'Employee ID', key: 'EmployeeId', width: 15},
            {header: 'Actual Hours', key: 'actualHours', width: 15},
            {header: 'Assigned Hours', key: 'assignedHours', width: 15},
            {header: 'Date', key: 'date', width: 15}
        ];

        worksheet.addRow(reportData);

        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-ossicedocument.spreadsheetml.sheet'
        );

        res.setHeader(
            'Content-Disposition',
            `attachment; filename=report-${todayDate}.xlsx`
        );
    }
    catch(error){
        console.log('Error in generating report data', error);
        throw new Error('Report not generated');
    }
}