const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = sequelize.define('Model3D', {
  url: DataTypes.STRING,
  format: DataTypes.STRING,
});