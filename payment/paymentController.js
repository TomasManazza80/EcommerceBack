const express = require('express');
const router = express.Router();
const paymentService = require('../services/paymentService');

router.post('/create', async (req, res) => {
  try {
    const createPreferenceDto = req.body;
    const preference = await paymentService.createPreference(createPreferenceDto, createPreferenceDto.id);
    console.log('esta es la preferencia: ', preference);
    return res.json({
      preferenceId: preference.id,
      init_point: preference.init_point,
    });
  } catch (error) {
    console.log('esto es lo que recibe ', createPreferenceDto);
    console.error('Error creating preference:', error);

    // Manejo de errores específico
    let message = 'Error interno del servidor';
    if (error.response && error.response.data) {
      message = error.response.data.message || message;
    }

    return res.status(500).json({ message });
  }
});

module.exports = router;
