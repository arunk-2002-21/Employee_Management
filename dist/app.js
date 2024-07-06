"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createEmployee_1 = require("./routes/createEmployee");
const login_1 = require("./routes/login");
const authRoutes_1 = require("./routes/authRoutes");
const logout_1 = require("./routes/logout");
const shiftRoutes_1 = require("./routes/shiftRoutes");
const timesheetRoutes_1 = require("./routes/timesheetRoutes");
const genReport_1 = require("./routes/genReport");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/createEmployee', createEmployee_1.createEmployeeRoute);
app.use('/login', login_1.loginRoute);
app.use('/authenticateEmployee', authRoutes_1.authenticationRoute);
app.use('/logout', logout_1.logoutRoute);
app.use('/generateShift', shiftRoutes_1.shiftDataRouter);
app.use('/fillTimeSheet', timesheetRoutes_1.fillTimeRouter);
app.use('/generateReport', genReport_1.generateReportRouter);
app.listen(port, () => {
    console.log(`Server is listen on ${port}`);
});
//# sourceMappingURL=app.js.map