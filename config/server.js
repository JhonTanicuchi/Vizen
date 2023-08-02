/**
 * Importación de módulos y archivos necesarios
 **/
const app = require("../app"); // Módulo principal de la aplicación
const { PORT, APP_URL } = require("./env.config"); // Configuración de puerto y URL de la aplicación

/**
 * Función para iniciar el servidor
 * Crea y escucha un servidor en el puerto especificado
 * Imprime un mensaje indicando la URL de acceso al servidor
 **/
async function startServer() {
  const server = app.listen(PORT, () => {}); // Crea un servidor y lo hace escuchar en el puerto especificado

  await new Promise((resolve) => {
    server.on("listening", () => {
      console.log(
        `Servidor en ejecución en el puerto ${PORT}, en modo ${app.get(
          "env"
        )}, puedes acceder a él en ${APP_URL}.`
      );
      console.log("");
      resolve();
    });
  });
}

module.exports = { startServer }; // Exporta la función startServer para su uso en otros archivos
