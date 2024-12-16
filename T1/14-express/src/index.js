import express from 'express';

const server = express();

const port = 3000;

server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});

server.get('/', (req, res) => {
  res.send('Hello World! Welcome to my server');
});

server.get('/ping', (req, res) => {
  res.send('PONG!');
});
