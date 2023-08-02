/**
 * Importación del módulo dotenv y carga de variables de entorno desde el archivo .env
 **/
require("dotenv").config();

/**
 * Obtención de variables de entorno
 **/
const PORT = process.env.PORT; // Puerto de la aplicación obtenido de la variable de entorno
const APP_URL = process.env.APP_URL; // URL de la aplicación obtenida de la variable de entorno

module.exports = { PORT, APP_URL }; // Exporta las variables de entorno para su uso en otros archivos
