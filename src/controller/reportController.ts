// src/controllers/reportController.ts
import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Shift from '../models/Shift';
import Timesheet from '../models/Timesheet';
import Employee from '../models/Employee';
import excel from 'exceljs';

export const generateReport = async (req: Request, res: Response) => {
  try {
    const shifts = await Shift.findAll({
      include: [
        { model: Employee, attributes: ['name', 'email', 'assignedShiftHours'] },
        { model: Timesheet },
      ],
    });

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Report');

    worksheet.columns = [
      { header: 'Employee Name', key: 'employeeName' },
      { header: 'Email', key: 'email' },
      { header: 'Assigned Shift Hours', key: 'assignedShiftHours' },
      { header: 'Actual Hours Worked', key: 'actualHours' },
      { header: 'Shift Start', key: 'startTime' },
      { header: 'Shift End', key: 'endTime' },
    ];

    shifts.forEach((shift) => {
      worksheet.addRow({
        employeeName: shift.Employee.name,
        email: shift.Employee.email,
        assignedShiftHours: shift.Employee.assignedShiftHours,
        actualHours: shift.actualHours,
        startTime: shift.startTime,
        endTime: shift.endTime,
      });
    });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ message: 'Error generating report', error });
  }
};
