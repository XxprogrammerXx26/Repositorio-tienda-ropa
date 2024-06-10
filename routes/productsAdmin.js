const express = require('express');
const router = express.Router();
const db = require('../database');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
}
});

const upload = multer({ storage: storage });

// Listar todos los productos
router.get('/', (req, res) => {
  const query = 'SELECT * FROM productos';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.render('products/index', { productos: results });
  });
});
router.get('/new', (req, res) => {
  res.render('products/new');
});


// Formulario para crear un nuevo producto
router.post('/new',upload.single('imagen'), (req, res) => {



  const { nombre, descripcion, precio,categoria } = req.body;
  let imagenUrl='';
  
  if (req.file) {
  imagenUrl = req.file.path.replace('public','');             // Ruta de la imagen en el servidor
  
}
const query = 'INSERT INTO productos (nombre, descripcion, precio,imagen,categoria) VALUES (?, ?, ?, ?,?)';
  db.query(query, [nombre, descripcion, precio, imagenUrl,categoria], (err, results) => {
    if (err) throw err;
    res.redirect('/productsAdmin');
  });
});


// Formulario para editar un producto
router.get('/edit/:id', (req, res) => {
  const productId = req.params.id;
  const query = 'SELECT * FROM productos WHERE id = ?';
  db.query(query, [productId], (err, results) => {
    if (err) throw err;
    res.render('products/edit', { producto: results[0] });
  });
});






// Actualizar un producto
router.post('/edit/:id', (req, res) => {
  const productId = req.params.id;
  const { nombre, descripcion, precio, imagen } = req.body;
  const query = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, imagen = ? WHERE id = ?';
  db.query(query, [nombre, descripcion, precio, imagen, productId], (err, results) => {
    if (err) throw err;
    res.redirect('/productsAdmin');
  });
});



// Eliminar un producto
router.post('/delete/:id', (req, res) => {
  const productId = req.params.id;
  const query = 'DELETE FROM productos WHERE id = ?';
  db.query(query, [productId], (err, results) => {
    if (err) throw err;
    res.redirect('/productsAdmin');
  });
});






module.exports = router;
