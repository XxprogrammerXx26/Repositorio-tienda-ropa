const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  const query = 'SELECT carrito.id, productos.nombre, productos.precio, carrito.cantidad FROM carrito JOIN productos ON carrito.producto_id = productos.id';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.render('cart', { carrito: results });
  });
});

router.post('/add', (req, res) => {
  const { producto_id, cantidad } = req.body;
  const query = 'INSERT INTO carrito (producto_id, cantidad) VALUES (?, ?)';
  db.query(query, [producto_id, cantidad], (err, results) => {
    if (err) throw err;

    res.redirect('/cart/');
  });
});


router.get('/clear', (req, res) => {
  const query = 'DELETE FROM carrito';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.redirect('/cart/');
  });
});













module.exports = router;
