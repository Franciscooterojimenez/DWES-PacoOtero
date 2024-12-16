import express from 'express';

const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!\n');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
