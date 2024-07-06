"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const uuid_1 = require("uuid");
class Report extends sequelize_1.Model {
}
exports.Report = Report;
Report.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: (0, uuid_1.v4)()
    },
    EmployeeId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    actualhours: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    assignedHours: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'Report'
});
//# sourceMappingURL=Report.js.map