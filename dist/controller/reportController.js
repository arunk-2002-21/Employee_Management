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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReport = void 0;
const Shift_1 = __importDefault(require("../models/Shift"));
const Timesheet_1 = __importDefault(require("../models/Timesheet"));
const Employee_1 = __importDefault(require("../models/Employee"));
const exceljs_1 = __importDefault(require("exceljs"));
const generateReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shifts = yield Shift_1.default.findAll({
            include: [
                { model: Employee_1.default, attributes: ['name', 'email', 'assignedShiftHours'] },
                { model: Timesheet_1.default },
            ],
        });
        const workbook = new exceljs_1.default.Workbook();
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
        yield workbook.xlsx.write(res);
        res.end();
    }
    catch (error) {
        res.status(500).json({ message: 'Error generating report', error });
    }
});
exports.generateReport = generateReport;
//# sourceMappingURL=reportController.js.map