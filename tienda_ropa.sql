CREATE DATABASE tienda_ropa;


USE tienda_ropa;

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `producto_id`, `cantidad`) VALUES
(3, 23, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `detalles` text DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `numero_seguimiento` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `categoria`) VALUES
(22, 'Camiseta premium hombre', '\r\nLa colección de Spreadshirt representa los mejores resultados de impresión en productos de una gran calidad. La extraordinaria gama de tallas garantiza un ajuste perfecto para grandes y pequeños. Nuestra camiseta premium ofrece infinitas posibilidades de combinación, sin importar si se usa debajo o encima de otras prendas.\r\n¡La recomendamos! Alta calidad y los mejores resultados para cualquier tipo de impresión\r\nLos mismos colores en todas las tallas para hombre, mujer y niño\r\nProducción justa y sostenible\r\nPeso del material: 150 g/m²\r\nMaterial: 100 % algodón (antracita: 50 % algodón, 50 % poliéster; azul jaspeado: 50 % algodón, 50 % poliéster; gris jaspeado: 85 % algodón, 15 % viscosa; rojo bordeaux salpicado: 65 % algodón, 35 % poliéster', 12000.00, '\\uploads\\1717086758165.PNG', '1'),
(23, 'Camiseta premamá', '\r\nLas mejores noticias: esta camiseta le deja sitio para crecer al pequeño milagro. Gracias a la proporción de elastano la tripa queda bien sujeta en cada estadio del embarazo.\r\nCorte que realza la figura\r\nDrapeado lateral elástico y parte delantera más larga para darle espacio a la tripa de embarazada\r\nTejido suave y elástico: 155g/m²\r\n95% algodón, 5% elastano', 120000.00, '\\uploads\\1717086825252.PNG', '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
