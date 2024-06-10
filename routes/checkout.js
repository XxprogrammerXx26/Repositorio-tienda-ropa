const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/checkout-confirm' , (req, res) => {
  res.render('checkout-confirm');
});





router.post('/checkout', (req, res) => {
  const { detalles, total, estado, numero_seguimiento } = req.body;
  const query = 'INSERT INTO pedidos (detalles, total, estado, numero_seguimiento) VALUES (?, ?, ?, ?)';
  db.query(query, [detalles, total, estado, numero_seguimiento], (err, results) => {
    if (err) throw err;
    res.render('checkout-confirm', { pedido: req.body });
  });
});

module.exports = router;
dsfdsfsdfsdfds