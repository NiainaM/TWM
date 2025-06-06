const sequelize = require('../config/database');
const User = require('./userModel');
const Agent = require('./agentModel');
const Admin = require('./adminModel');
const Property = require('./propertyModel');
const Media = require('./mediaModel');
const Model3D = require('./model3dModel');
const Appointment = require('./appointmentModel');

Agent.hasMany(Property);
Property.belongsTo(Agent);
Property.hasMany(Media);
Property.hasOne(Model3D);
Media.belongsTo(Property);
Model3D.belongsTo(Property);

module.exports = { sequelize, User, Agent, Admin, Property, Media, Model3D, Appointment };
