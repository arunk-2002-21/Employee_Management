"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const credentails_1 = __importDefault(require("../common/credentails"));
const sequelize = new sequelize_1.Sequelize({
    username: credentails_1.default.postgres.USERNAME,
    host: credentails_1.default.postgres.HOST,
    database: credentails_1.default.postgres.DATABASE,
    password: credentails_1.default.postgres.PASSWORD,
    port: 5432,
    // username: 'postgres',
    // host: 'localhost',
    // database: "Employee",
    // password: "sqlpg24",
    // port: 5432,
    dialect: "postgres",
});
sequelize.authenticate()
    .then(() => {
    console.log('Database connection established sucessfully.');
})
    .catch((err) => {
    console.log('Unable to connect with the database', err);
});
//Synchronize
sequelize.sync()
    .then(() => {
    console.log('Models synchronized with the database.');
})
    .catch((err) => {
    console.log('Unable to synchronise models with the database', err);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map