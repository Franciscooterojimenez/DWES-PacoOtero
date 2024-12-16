import express from 'express';
import fs from 'fs';

const app = express();
const puerto = 3000;

app.get('/page', (req, res) => {
  fs.readFile('index.html', 'utf-8', (error, contenido) => {
    if (error) {
      res.status(500).send('Internal server error');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.send(contenido);
    }
  });
});

app.get('/error', (req, res) => {
  fs.readFile('error.html', 'utf-8', (error, contenido) => {
    if (error) {
      res.status(500).send('Internal server error');
    } else {
      res.status(404).send(contenido);
    }
  });
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
