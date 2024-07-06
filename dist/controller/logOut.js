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
exports.logoutEmployee = void 0;
const logout_1 = require("../services/logout");
const logoutEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield (0, logout_1.employeeLogout)(req.body);
    res.clearCookie('token');
    res.send(employee);
});
exports.logoutEmployee = logoutEmployee;
//# sourceMappingURL=logOut.js.map