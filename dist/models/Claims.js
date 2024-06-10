"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const Employee_1 = __importDefault(require("./Employee"));
class Claims extends sequelize_1.Model {
}
Claims.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: Employee_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'claims'
});
Claims.belongsTo(Employee_1.default, { foreignKey: 'employeeId' });
exports.default = Claims;
//# sourceMappingURL=Claims.js.map