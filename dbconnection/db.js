const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  dialect: process.env.DIALECT, // Agrega esta línea
  dialectModule: require('pg'), // Agrega esta línea si estás utilizando PostgreSQL
});

module.exports = sequelize;