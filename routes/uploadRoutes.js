const express = require('express');
const router = express.Router();
const multer = require('multer');
const controller = require('../controllers/uploadController');
const auth = require('../middleware/authMiddleware');
const upload = multer({ dest: 'uploads/' });

router.post('/', auth, upload.single('file'), controller.uploadFile);

module.exports = router;