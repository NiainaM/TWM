const path = require('path');
exports.uploadFile = (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    res.json({ url: '/uploads/${req.file.filename}'});
};