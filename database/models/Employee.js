const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db');

const Employee = sequelize.define('User', 
    {firstName: 
        {type: DataTypes.STRING,
            allowNull: false
        },
    lastName:
        {type: DataTypes.STRING
            allowNull: false
        },
    department:
        {type: DataTypes.STRING
            allowNull: false
        }

    }
);

module.exports = Employee;
