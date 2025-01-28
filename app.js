const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const BASE_URL = process.env.BASE_URL || 'https://ecommerceback-server.onrender.com/';

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');
const paymentRouter = require('./routes/paymentRoutes');

app.use('/', indexRouter);
app.use(`${BASE_URL}users`, usersRouter);
app.use(`${BASE_URL}products`, productRouter);
app.use(`${BASE_URL}`, paymentRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.set("view engine", "ejs");

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
