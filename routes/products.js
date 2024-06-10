const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  const query = 'SELECT * FROM productos WHERE id = ?';
  db.query(query, [productId], (err, results) => {
    if (err) throw err;
    res.render('product', { producto: results[0] });
  });
});

module.exports = router;
