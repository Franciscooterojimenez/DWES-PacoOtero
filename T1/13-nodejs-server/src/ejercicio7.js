import http from 'http';
import url from 'url';

const servidor = http.createServer((solicitud, respuesta) => {
  const partesUrl = url.parse(solicitud.url, true);
  const numeroParametro = parseInt(partesUrl.query.numero, 10);
  let result = '';

  if (!Number.isNaN(numeroParametro)) {
    for (let i = 1; i < numeroParametro; i++) {
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

    respuesta.writeHead(200, { 'Content-Type': 'text/plain' });
    respuesta.end(result);
  } else {
    respuesta.writeHead(400, { 'Content-Type': 'text/plain' });
    respuesta.end('Parámetro "numero" no válido en la URL');
  }
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
