const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db');

const Task = db.define('Task',
    {description: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },
    priority:
        {
            type: DataTypes.STRING,
            defaultValue: 'MEDIUM',
            allowNull: true
        },
    completion:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true
        }
    }
);

module.exports = Task;