import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import  Employee  from './Employee';
import Shift from "./Shift";

interface TimesheetAttribute{
    id?: string;
    employeeId: string;
    shiftId: string;
    projectName: string;
    taskName: string;
    fromDate: Date;
    toDate: Date;
}

class Timesheet extends Model<TimesheetAttribute> implements TimesheetAttribute{
    public id!: string;
    public employeeId!: string;
    public shiftId!: string;
    public projectName!: string;
    public taskName!: string;
    public fromDate!: Date;
    public toDate!: Date;
}

Timesheet.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    employeeId: {
        type: DataTypes.UUID,
        references: {
            model: Employee,
            key: 'id'
        }
    },
    shiftId: {
        type: DataTypes.UUID,
        references:{
            model: Shift,
            key: 'id'
        }
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    taskName:{
        type: DataTypes.STRING,
        allowNull: false
      },
    fromDate:{
        type: DataTypes.DATE,
        allowNull: false
      },
    toDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
        sequelize,
        tableName: 'timesheets'
    }

);

Timesheet.belongsTo(Employee, {foreignKey: 'employeeId' });
Timesheet.belongsTo(Shift, {foreignKey: 'shiftId' });
export default Timesheet;