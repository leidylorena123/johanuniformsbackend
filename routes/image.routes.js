const express = require("express");
const routes = express.Router();

const imageController = require('../controller/image.controller');
const router = require("./usuario.routes");
router.post("/upload/:tabla", imageController.upload, imageController.uploadFile); // subir una img
router.get("/api/productos", imageController.getProductos); // obtener productos


module.exports = router;
