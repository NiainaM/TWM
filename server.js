const app = require('./app');
const { sequelize } = require('./models');

sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => console.log('✅ Serveur lancé sur le port 3000'));
});