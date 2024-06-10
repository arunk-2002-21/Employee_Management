"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const Employee_1 = __importDefault(require("./Employee"));
class Shift extends sequelize_1.Model {
}
Shift.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: Employee_1.default,
            key: 'id'
        }
    },
    startTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    actualHours: {
        type: sequelize_1.DataTypes.FLOAT,
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
}, {
    sequelize: pgConfig_1.default,
    tableName: 'shifts'
});
Shift.belongsTo(Employee_1.default, { foreignKey: 'employeeId' });
exports.default = Shift;
//# sourceMappingURL=Shift.js.map