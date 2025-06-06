const { Property, Appointment } = require('../models');
exports.getStats = async (req, res) => {
    const propertyCount = await Property.count({ where: { agentId: req,userId } });
    const appointmentCount = await Appointment.count({ where: { agentId: req,userId } });
    res.json({ propertyCount, appointmentCount });
};