const express = require("express");
const mysql = require("mysql");
const conn = require("express-myconnection");
const dotenv = require("dotenv");
const path = require("path");

const imageRoutes = require('./routes/image.routes');
const userRoutes = require('./routes/usuario.routes');
const facturaRoutes = require('./routes/factura.routes'); 
const devolucionRoutes = require('./routes/devolucion.routes');
const RecuperarRoutes = require('./routes/recuperar.routes');
const SolicitudRoutes = require('./routes/solicitud.routes');

dotenv.config(); // Carga variables del .env

const app = express();

// Configuración de carpeta para archivos estáticos
const carpetaCarrito = path.join(__dirname, '..', 'carrito');
app.use('/carrito', express.static(carpetaCarrito));

// Middleware
const cors = require("cors");
app.use(cors());
app.use(express.json()); 

app.set("port", process.env.PORT || 5013);

// Configuración de conexión a Azure MySQL
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true
    }
};

app.use(conn(mysql, dbConfig, 'single'));

// Rutas
app.use('/', imageRoutes);
app.use('/', userRoutes); 
app.use('/', facturaRoutes); 
app.use('/', devolucionRoutes);
app.use('/', RecuperarRoutes);
app.use('/', SolicitudRoutes);

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log("Servidor funcionando por el puerto", app.get("port"));
});
