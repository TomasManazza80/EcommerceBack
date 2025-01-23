require("dotenv").config();

module.exports = {
  "db": {
  //   "database": process.env.database,
  //   "username": process.env.username,
  //   "password": process.env.password,
  //  " port": process.env.port,
  //   "host": process.env.host,
  //   "dialect": process.env.dialect,

  "database": "postgres",
  "username": "postgres",
  "password": "password",
  "host": "localhost",
  "port": 5432,
  "dialect": "postgres"
  },
};
