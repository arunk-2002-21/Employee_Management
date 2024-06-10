import { Model,DataTypes, ForeignKey } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Employee from './Employee';

interface ShiftAttributes{
    id?: string;
    employeeId: string;
    startTime: Date;
    endTime: Date | null;
    actualHours: number;
}


class Shift extends Model<ShiftAttributes> implements ShiftAttributes {
    public id!: string;
    public employeeId!: string;
    public startTime!: Date;
    public endTime!: Date | null;
    public actualHours!: number;
    Employee: any;
}

Shift.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    employeeId:{
        type: DataTypes.UUID,
        references: {
            model: Employee,
            key: 'id'
        }
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
    endTime: {
        type: DataTypes.DATE,
        allowNull: true
      },
    actualHours: {
        type: DataTypes.FLOAT,
        allowNull: false,
        get() {
          const startTime = this.getDataValue('startTime');
          const endTime = this.getDataValue('endTime');
          if (startTime && endTime) {
            return (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
          }
          return 0;
        }
      }
    },
    {
        sequelize,
        tableName: 'shifts'
    }

)

Shift.belongsTo(Employee, {foreignKey: 'employeeId'});

export default Shift;