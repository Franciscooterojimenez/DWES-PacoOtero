const morgan = require("morgan");

// Configurar Morgan para registrar en consola
const logger = morgan("dev"); // Puedes cambiar a 'combined' para más detalles

module.exports = logger;