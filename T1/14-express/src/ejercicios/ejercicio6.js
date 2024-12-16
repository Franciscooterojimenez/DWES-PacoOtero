import express from 'express';

const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  const nombre = req.query.name || 'World!';
  res.type('text/plain');
  res.send(`Hello ${nombre}!\n`);
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
