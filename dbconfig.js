require("dotenv").config();

module.exports = {
  "db": {
    "database": process.env.DATABASE,
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "host": process.env.HOST,
    "port": parseInt(process.env.PORT), // Agrega parseInt aquí
    "dialect": process.env.DIALECT
  },
};