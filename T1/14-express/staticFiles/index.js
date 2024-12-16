import express from 'express';

const app = express();
const puerto = 3000;

// Imagenes accesibles: /images/image.png y /images/juan.png

app.use('/images', express.static('images'));

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
