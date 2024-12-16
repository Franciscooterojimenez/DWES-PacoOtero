import express from 'express';

const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  const numeroParametro = parseInt(req.query.numero, 10);
  let result = '';

  if (!Number.isNaN(numeroParametro)) {
    for (let i = 1; i <= numeroParametro; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += 'fizzbuzz\n';
      } else if (i % 5 === 0) {
        result += 'buzz\n';
      } else if (i % 3 === 0) {
        result += 'fizz\n';
      } else {
        result += `${i}\n`;
      }
    }

    res.type('text/plain');
    res.send(result);
  } else {
    res.status(400).type('text/plain').send('Parámetro "numero" no válido en la URL');
  }
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
