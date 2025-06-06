const { Property, Media, Model3D, Agent } = require('../models');

exports.createProperty = async (req, res) => {
  try {
    const { title, description, price, location } = req.body;
    const property = await Property.create({ title, description, price, location, AgentId: req.userId });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.findAll({ include: [Media, Model3D, Agent] });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id, { include: [Media, Model3D, Agent] });
    if (!property) return res.status(404).json({ message: 'Bien non trouvé' });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const updated = await Property.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Mis à jour', updated });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    await Property.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Bien supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};