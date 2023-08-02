/**
 * Importación de módulos y configuraciones necesarias
 **/
const express = require("express"); // Módulo Express para crear rutas
const router = express.Router(); // Crea un nuevo enrutador de Express
const fs = require("fs"); // Módulo fs para trabajar con el sistema de archivos

const pathRouter = __dirname; // Ruta del directorio actual de las rutas

/**
 * Función para eliminar la extensión de un nombre de archivo
 * @param {string} fileName - Nombre de archivo
 * @returns {string} - Nombre de archivo sin la extensión
 **/
const removeExtension = (fileName) => {
  return fileName.replace(".route.js", "");
};

/**
 * Función para cargar las rutas desde un directorio y sus subdirectorios
 * @param {string} dirPath - Ruta del directorio
 **/
const loadRoutes = (dirPath) => {
  const files = fs.readdirSync(dirPath); // Lee los archivos del directorio

  files.forEach((file) => {
    const filePath = `${dirPath}/${file}`; // Ruta completa del archivo
    const isDirectory = fs.statSync(filePath).isDirectory(); // Verifica si es un directorio

    if (isDirectory) {
      loadRoutes(filePath); // Si es un directorio, carga las rutas dentro del directorio
    } else {
      const isIndexFile = file === "index.js"; // Verifica si es el archivo index.js
      const isRouteFile = file.endsWith(".route.js"); // Verifica si es un archivo de ruta

      if (!isIndexFile && isRouteFile) {
        const routePath = `/${removeExtension(file)}`; // Ruta de la ruta sin la extensión
        const route = require(filePath); // Importa la ruta desde el archivo
        router.use(routePath, route); // Agrega la ruta al enrutador
      }
    }
  });
};

loadRoutes(pathRouter); // Carga las rutas desde el directorio actual y sus subdirectorios

/**
 * Ruta para manejar las solicitudes no encontradas (404)
 **/
router.get("*", (req, res) => {
  res.status(404).render("errors/404", { title404: "404" });
});

module.exports = router; // Exporta el enrutador para su uso en otros archivos
