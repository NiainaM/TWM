const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = sequelize.define('Media', {
  url: DataTypes.STRING,
  type: DataTypes.STRING,
});