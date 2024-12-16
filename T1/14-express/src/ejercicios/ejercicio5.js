import express from 'express';

const app = express();
const puerto = 3000;

app.get('/page', (req, res) => {
  res.download('index.html', (error) => {
    if (error) {
      if (!res.headersSent) {
        res.status(500).send('Error interno del servidor');
      }
    }
  });
});

app.get('/error', (req, res) => {
  res.download('error.html', (error) => {
    if (error) {
      if (!res.headersSent) {
        res.status(500).send('Error interno del servidor');
      }
    }
  });
});

app.use((req, res) => {
  res.status(404).type('txt').send('Página no encontrada');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
