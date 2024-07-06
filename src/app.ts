import express, {Request, Response} from "express";
import { createEmployeeRoute } from "./routes/createEmployee";
import { loginRoute } from "./routes/login";
import {authenticationRoute} from './routes/authRoutes';
import { logoutRoute } from "./routes/logout";
import {shiftDataRouter} from './routes/shiftRoutes';
import {fillTimeRouter} from './routes/timesheetRoutes';
import {generateReportRouter} from './routes/genReport';
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());


app.use('/createEmployee', createEmployeeRoute);

app.use('/login', loginRoute);

app.use('/authenticateEmployee', authenticationRoute);

app.use('/logout', logoutRoute);

app.use('/generateShift', shiftDataRouter);

app.use('/fillTimeSheet', fillTimeRouter);

app.use('/generateReport', generateReportRouter);

app.listen(port, () => {
    console.log(`Server is listen on ${port}`);
});