const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM productos LIMIT 8';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.render('index', { productos: results });
  });
});

module.exports = router;
