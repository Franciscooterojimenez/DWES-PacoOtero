const expressLoader = require("./express-loader");
const mongoLoader = require("./mongodb-loader"); // Asegúrate de que la importación es correcta

module.exports = (app) => {
    expressLoader(app);
    mongoLoader(); // Llama a la función correctamente
};