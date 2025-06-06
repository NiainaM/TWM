const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointmentController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, controller.createAppointment);
router.get('/:agentId', auth, controller.getAppointments);

module.exports = router;