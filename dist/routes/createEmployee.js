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
exports.createEmployeeRoute = void 0;
const express_1 = require("express");
const createEmployee_1 = require("../controller/createEmployee");
const createEmployeeRoute = (0, express_1.Router)();
exports.createEmployeeRoute = createEmployeeRoute;
createEmployeeRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEmployee = yield (0, createEmployee_1.addNewEmployee)(req, res);
        res.send(newEmployee);
    }
    catch (error) {
        console.log('Error in creating an employee account', error);
    }
}));
//# sourceMappingURL=createEmployee.js.map