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
exports.logoutRoute = void 0;
const express_1 = require("express");
const logOut_1 = require("../controller/logOut");
const logoutRoute = (0, express_1.Router)();
exports.logoutRoute = logoutRoute;
logoutRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employeelogout = yield (0, logOut_1.logoutEmployee)(req, res);
        res.send(employeelogout);
    }
    catch (error) {
        console.log('Error ion logout employee acccount');
    }
}));
//# sourceMappingURL=logout.js.map