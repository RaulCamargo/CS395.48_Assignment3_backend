const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db');

const Task = Sequelize.define('Task',
    {Description: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },
    Priority:
        {
            type: DataTypes.ENUM('LOW','MEDIUM', 'HIGH'),
            defaultValue: 'MEDIUM',
            allowNull: false
        },
    Completion:
        {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }
);

module.exports = Task;