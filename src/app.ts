import express from "express";
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes';
import shiftRouter from './routes/shiftRoutes';
import timesheetRouter from './routes/timesheetRoutes';
import reportRouter from './routes/reportRoutes';
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/auth', authRouter);
app.use('/shift', shiftRouter);
app.use('/timesheet', timesheetRouter);
app.use('/report', reportRouter);

app.listen(port, () => {
    console.log(`Server is listen on ${port}`);
});