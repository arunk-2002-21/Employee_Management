import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Employee  from "./Employee";

interface ClaimsAttribute{
    id?: string;
    key: string;
    value: string;
    employeeId: string;
}

class Claims extends Model<ClaimsAttribute> implements ClaimsAttribute{
    public id!: string;
    public key!: string;
    public value!: string;
    public employeeId!: string;
}

Claims.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false
      },
    value:  {
        type: DataTypes.STRING,
        allowNull: false
      },
    employeeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Employee,
            key: 'id'
        }
    }
    },
    {
        sequelize,
        tableName: 'claims'
    }
)

Claims.belongsTo(Employee, { foreignKey: 'employeeId' });
export default Claims;