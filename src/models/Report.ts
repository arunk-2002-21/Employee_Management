import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import {v4 as uuidv4} from 'uuid';

interface ReportAttributes {
    id: string,
    EmployeeId: string,
    actualhours: string,
    assignedHours: string,
    date: string
}


class Report extends Model<ReportAttributes> implements ReportAttributes{
    public id!: string
    public EmployeeId!: string
    public actualhours!: string
    public assignedHours!: string
    public date!: string
}


Report.init({
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    EmployeeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actualhours: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    assignedHours:{
        type: DataTypes.STRING,
        allowNull: false
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    tableName: 'Report'
}

)

export {Report}