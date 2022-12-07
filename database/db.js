// Connect to db 

const {Sequelize} = require('sequelize');
const {dbName, dbUser, dbPwd} = require('./utils/configDB');

const sequelize = new Sequelize(dbName, dbUser, dbPwd,
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    }
);

module.exports = db;