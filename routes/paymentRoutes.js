const express = require('express');
const paymentController = require('../controller/paymentController');
const router = express.Router();

router.post('/create_payment', paymentController.createPayment);
router.post('/webhook', paymentController.handleWebhook); // Nueva ruta para webhooks

module.exports = router;
