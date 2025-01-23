// routes/paymentRoutes.js

const express = require('express');
const paymentController = require('../controller/paymentController.js');

const router = express.Router();

router.post('/create_payment', paymentController.createPayment);

module.exports = router;