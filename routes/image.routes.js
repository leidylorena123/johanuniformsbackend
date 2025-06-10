const express = require("express");
const routes = express.Router();

const imageController = require('../controller/image.controller');
routes.post('/images/:tabla', imageController.upload, imageController.uploadFile);
routes.get('/api/productos', imageController.getProductos);


module.exports = routes;