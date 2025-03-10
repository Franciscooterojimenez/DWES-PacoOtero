const mongoose = require("mongoose");

async function mongoLoader() {
    try {
        const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/mi-tienda";
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Conectado a MongoDB");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error);
        process.exit(1);
    }
}

module.exports = mongoLoader; // Exporta la función correctamente
