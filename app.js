/**
 * Importación de módulos y configuraciones
 **/
const express = require("express"); // Módulo Express para crear la aplicación web
const bodyParser = require("body-parser"); // Módulo para analizar el cuerpo de las solicitudes HTTP
const cors = require("cors"); // Módulo para habilitar el acceso CORS en la aplicación
require("./config/console"); // Archivo de configuración de la consola
const path = require("path");

const app = express(); // Crea una nueva instancia de la aplicación Express

// Middleware
app.use(bodyParser.json()); // Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.urlencoded({ extended: false })); // Middleware para analizar los datos del formulario
app.use(cors()); // Middleware para habilitar el acceso CORS a la aplicación
app.disable("x-powered-by"); // Deshabilita la cabecera "x-powered-by" para mayor seguridad

// Rutas
app.use("/api", require("./routes")); // Middleware para enrutar las solicitudes que comienzan con "/api" al archivo de rutas correspondiente

module.exports = app; // Exporta la aplicación Express para su uso en otros archivos
