const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = sequelize.define('Agent', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
});