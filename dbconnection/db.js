const { Sequelize } = require('sequelize');

const DATABASE = 'ecommerce_qyod';
const USERNAME = 'namnam';
const PASSWORD = '4JIehbCSj30YL9WyeX7HZGywg5j67xw4';
const HOST = 'dpg-cua1im1u0jms73fla1n0-a.oregon-postgres.render.com';
const PORT = 5432;
const DIALECT = 'postgres';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
  native: false,
});

module.exports = sequelize;