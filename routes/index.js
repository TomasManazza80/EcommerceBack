const express = require('express');
const router = express.Router();

// Asegúrate de que `BASE_URL` esté definido si lo necesitas aquí
const BASE_URL = process.env.BASE_URL || 'https://ecommerceback-server.onrender.com/';

// Ruta de la página principal
router.get(BASE_URL, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;