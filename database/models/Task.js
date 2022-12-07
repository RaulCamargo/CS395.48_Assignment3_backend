const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db');

const Task = Sequelize.define('Task',
    {description: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },
    priority:
        {
            type: DataTypes.ENUM('LOW','MEDIUM', 'HIGH'),
            defaultValue: 'MEDIUM',
            allowNull: false
        },
    completion:
        {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }
);

module.exports = Task;