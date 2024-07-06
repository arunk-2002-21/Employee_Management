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
exports.timeSheet = void 0;
const Timesheet_1 = __importDefault(require("../models/Timesheet"));
const credentails_1 = __importDefault(require("../common/credentails"));
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function timeSheet(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isUserLoggedIn = yield jsonwebtoken_1.default.verify(data.token, credentails_1.default.jwt.SECRET_KEY);
            if (isUserLoggedIn) {
                const timeSheetData = yield Timesheet_1.default.create({
                    id: (0, uuid_1.v4)(),
                    employeeId: data.empId,
                    shiftId: data.shiftId,
                    projectName: data.projectName,
                    taskName: data.taskName,
                    fromDate: data.fromDate,
                    toDate: data.toDate
                });
                return timeSheetData;
            }
            else {
                return "User not logged in";
            }
        }
        catch (error) {
            console.log('Error in creating timesheet', error);
        }
    });
}
exports.timeSheet = timeSheet;
//# sourceMappingURL=timeSheet.js.map