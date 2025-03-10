const express = require("express");
const logger = require("./config/morgan"); // Importar el logger
const loadModules = require("./loaders"); // Importar loaders

const app = express();

app.use(logger); // Usar Morgan en todas las peticiones

loadModules(app); // Cargar módulos adicionales (middlewares, configuración, etc.)

module.exports = app;