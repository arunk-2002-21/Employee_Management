import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";


interface EmployeeAttributes{
    id?: string;
    name: string;
    email: string;
    password: string;
    assignedShiftHours: number;
    role: string;
}

class Employee extends Model<EmployeeAttributes> implements EmployeeAttributes {
    async checkPassword(password: string): Promise<boolean> {
        return password === 'correctPassword';
    }
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public assignedShiftHours!: number;
    public role!: string;
}

Employee.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false 
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    assignedShiftHours:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
        sequelize,
        tableName:'employees'
    }

);

export default Employee;