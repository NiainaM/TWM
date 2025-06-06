
require('dotenv').config;
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'No token' });
    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};