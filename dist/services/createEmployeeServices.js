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
exports.createNewEmployee = void 0;
const Employee_1 = __importDefault(require("../models/Employee"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
function createNewEmployee(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newPassword = yield bcrypt_1.default.hash(data.password, 10);
            const newEmployee = yield Employee_1.default.create({
                id: (0, uuid_1.v4)(),
                name: data.name,
                email: data.email,
                password: newPassword,
                assignedShiftHours: data.assignedShiftHours,
                role: data.role
            });
            return newEmployee;
        }
        catch (error) {
            console.log('error occured during creating new Employee account:', error);
        }
    });
}
exports.createNewEmployee = createNewEmployee;
//# sourceMappingURL=createEmployeeServices.js.map