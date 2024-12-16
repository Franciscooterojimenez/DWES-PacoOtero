import express from 'express';
import fs from 'fs';

const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  fs.readFile('index.html', (error, contenido) => {
    if (error) {
      res.status(500).send('Internal server error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(contenido, 'utf-8');
    }
  });
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
