import http from 'http';
import url from 'url';

const servidor = http.createServer((solicitud, respuesta) => {
  const partesUrl = url.parse(solicitud.url, true);
  const parametros = partesUrl.query;
  const nombre = parametros.name || 'World!';

  respuesta.writeHead(200, { 'Content-Type': 'text/plain' });
  respuesta.end(`Hello ${nombre}!\n`);
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
