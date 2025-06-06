const express = require('express');
const router = express.Router();
const controller = require('../controllers/propertyController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, controller.createProperty);
router.get('/', controller.getAllProperties);
router.get('/:id', controller.getPropertyById);
router.put('/:id', auth, controller.updateProperty);
router.delete('/:id', auth, controller.deleteProperty);

module.exports = router;