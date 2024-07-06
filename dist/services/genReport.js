"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReportData = void 0;
const Report_1 = require("../models/Report");
const exceljs_1 = require("exceljs");
const uuid_1 = require("uuid");
function generateReportData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const date = new Date();
            const todayDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            console.log(todayDate);
            const reportData = yield Report_1.Report.create({
                id: (0, uuid_1.v4)(),
                EmployeeId: req.body.empId,
                actualhours: req.body.actHours,
                assignedHours: req.body.assHours,
                date: todayDate
            });
            const workbook = new exceljs_1.Workbook();
            const worksheet = workbook.addWorksheet('Report Data');
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 36 },
                { header: 'Employee ID', key: 'EmployeeId', width: 15 },
                { header: 'Actual Hours', key: 'actualHours', width: 15 },
                { header: 'Assigned Hours', key: 'assignedHours', width: 15 },
                { header: 'Date', key: 'date', width: 15 }
            ];
            worksheet.addRow(reportData);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-ossicedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', `attachment; filename=report-${todayDate}.xlsx`);
        }
        catch (error) {
            console.log('Error in generating report data', error);
            throw new Error('Report not generated');
        }
    });
}
exports.generateReportData = generateReportData;
//# sourceMappingURL=genReport.js.map