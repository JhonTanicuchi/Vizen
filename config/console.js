/**
 * Importación de módulos necesarios
 **/
const figlet = require("figlet"); // Módulo para generar arte de texto
const chalk = require("chalk"); // Módulo para dar estilo al texto en la consola
const { name, version, description, author } = require("../package.json"); // Datos de la aplicación obtenidos desde package.json

/**
 * Función para presentar la aplicación
 * Imprime información sobre la aplicación y llama a la función para iniciar el servidor
 **/
function presentApp() {
  // Genera el arte de texto estilizado
  const styledText = figlet.textSync("Vizen", { font: "Standard" });

  // Crea el mensaje con información de la aplicación
  const appInfo = `
${chalk.bold("Información de la Aplicación:")}
${chalk.cyan("Nombre:")} ${name}
${chalk.cyan("Versión:")} ${version}
${chalk.cyan("Descripción:")} ${description}
${chalk.cyan("Autor:")} ${author}`;

  console.clear(); // Limpia la consola
  console.log(styledText); // Imprime el arte de texto estilizado
  console.log(appInfo); // Imprime la información de la aplicación
  console.log("");
  console.log(chalk.gray("=".repeat(100))); // Línea de separación estilizada
  console.log("");

  const { startServer } = require("./server"); // Importa la función startServer desde el módulo server.js
  startServer(); // Llama a la función startServer para iniciar el servidor
}

/**
 * Función para animar el texto
 * Imprime un texto animado en la consola durante 5 segundos y luego llama a presentApp()
 * @param {string} text - El texto a animar
 **/
function animateText(text) {
  const animationInterval = 500; // Intervalo de tiempo en milisegundos
  const animationFrames = ["-", "\\", "|", "/"]; // Marcos de animación

  let currentFrameIndex = 0;
  const intervalId = setInterval(() => {
    const currentFrame = animationFrames[currentFrameIndex];
    const animatedText = `${chalk.bold.blue(currentFrame)} ${text}`;

    console.clear(); // Limpia la consola
    console.log(animatedText); // Imprime el texto animado

    currentFrameIndex = (currentFrameIndex + 1) % animationFrames.length;
  }, animationInterval);

  // Detener la animación después de 5 segundos
  setTimeout(() => {
    clearInterval(intervalId);
    presentApp(); // Llama a la función presentApp en lugar de presentar el servidor aquí
  }, 5000);
}

animateText("Vizen"); // Llama a la función animateText con el texto "Vizen" como parámetro
