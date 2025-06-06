const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
});