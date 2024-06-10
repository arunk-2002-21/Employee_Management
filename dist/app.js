"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const shiftRoutes_1 = __importDefault(require("./routes/shiftRoutes"));
const timesheetRoutes_1 = __importDefault(require("./routes/timesheetRoutes"));
const reportRoutes_1 = __importDefault(require("./routes/reportRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/auth', authRoutes_1.default);
app.use('/shift', shiftRoutes_1.default);
app.use('/timesheet', timesheetRoutes_1.default);
app.use('/report', reportRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is listen on ${port}`);
});
//# sourceMappingURL=app.js.map