const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config(); // Carga las variables del archivo .env

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true
    }
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
    } else {
        console.log("Conectado a la base de datos MySQL en Azure");
    }
});

module.exports = db;
