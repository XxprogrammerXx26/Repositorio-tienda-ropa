const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const multer = require('multer');
const port = 3000;
const path = require("path");


// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');


// Configurar middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(session({
  secret: 'mi_secreto',
  resave: false,
  saveUninitialized: true
}));




app.use(express.static(path.join(__dirname, 'public')));
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const productsAdminRouter = require('./routes/productsAdmin');



app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/productsAdmin', productsAdminRouter);


app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
