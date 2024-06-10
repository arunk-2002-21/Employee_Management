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
exports.endShift = exports.startShift = void 0;
const sequelize_1 = require("sequelize");
const Shift_1 = __importDefault(require("../models/Shift"));
const startShift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shift = yield Shift_1.default.create({
            employeeId: req.employee.id,
            startTime: new Date(),
            endTime: new Date(),
            actualHours: 0
        });
        res.status(201).json({ message: 'Shift started', shift });
    }
    catch (error) {
        res.status(500).json({ message: 'Error starting shift', error });
    }
});
exports.startShift = startShift;
const endShift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shift = yield Shift_1.default.findOne({
            where: {
                employeeId: req.employee.id,
                endTime: { [sequelize_1.Op.is]: null } // Use Sequelize's Op.is operator
            }
        });
        if (!shift) {
            return res.status(404).json({ message: 'No active shift found' });
        }
        shift.endTime = new Date();
        const diffMs = shift.endTime.getTime() - shift.startTime.getTime();
        const diffHours = diffMs / (1000 * 60 * 60);
        shift.actualHours = diffHours;
        yield shift.save();
        res.status(200).json({ message: 'Shift ended', shift });
    }
    catch (error) {
        res.status(500).json({ message: 'Error ending shift', error });
    }
});
exports.endShift = endShift;
//# sourceMappingURL=shiftController.js.map