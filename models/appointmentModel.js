const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = sequelize.define('Appointment', {
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    agentId: DataTypes.INTEGER,
    propertyId: DataTypes.INTEGER
});