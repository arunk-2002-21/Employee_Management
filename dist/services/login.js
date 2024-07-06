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
exports.employeeLogin = void 0;
const Employee_1 = __importDefault(require("../models/Employee"));
const credentails_1 = __importDefault(require("../common/credentails"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function employeeLogin(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employee = yield Employee_1.default.findOne({
                where: {
                    email: data.email
                }
            });
            if (!employee) {
                return 'Employee Not Found';
            }
            const isPasswordMAtch = yield bcrypt_1.default.compare(data.password, employee.password);
            if (isPasswordMAtch) {
                const date = new Date();
                const hour = date.getHours();
                const min = date.getMinutes();
                const token = jsonwebtoken_1.default.sign({ email: employee.email }, credentails_1.default.jwt.SECRET_KEY);
                return {
                    "token": token,
                    "startTime": {
                        Hour: hour,
                        Min: min,
                    }
                };
            }
            else {
                return 'Password does not match';
            }
        }
        catch (error) {
            console.log('Error occured during login employee account', error);
            throw new Error('Login Failed');
        }
    });
}
exports.employeeLogin = employeeLogin;
//# sourceMappingURL=login.js.map