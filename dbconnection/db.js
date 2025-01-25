const { Sequelize } = require('sequelize');
const dbconfig = require('../dbconfig'); // Asegúrate de que la ruta es correcta

const database = new Sequelize(dbconfig.db, {
  dialect: 'postgres',
  dialectOptions: {
    connectTimeout: 60000 // 60 segundos
  },
  // otras configuraciones si las tienes
});

database
  .authenticate()
  .then(() => {
    console.log('DataBase Connected!');
  })
  .catch((error) => {
    console.log(`error connecting database:`, error);
  });

module.exports = database;
