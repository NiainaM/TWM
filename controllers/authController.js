const { userInfo } = require('os');
const { Admin } = require('../models');
exports.register = async (req, res) => {
    const { email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const Model = role === 'agent' ? Agent : role === 'admin' ? Admin : User;
    const user = await Model.create({ email, password: hash });
    res.json(user);
};

exports.login = async (req, res) => {
    const { email, password, role } = req.body;
    const Model = role === 'agent' ? Agent : role === 'afmin' ? Admin : User;
    const user = await Model.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, role }, 'secret');
    res.json({ token });
};