const { json } = require('stream/consumers');
const { Appointment } = require('../models');
exports.createAppointment = async (req, res) => {
    const { date, agentId, propertyId } = req.body;
    const appointment = await Appointment.create({ date, agentId, propertyId, userId: req.userId, status: 'pending' }); 
    res.json(appointment);
};

exports.getAppointments = async (req, res) => {
    const appointment = await Appointment.findAll({ where: { agentId: req.userId } });
    res.json(appointment);
};