import http from 'http';
import fs from 'fs';

const servidor = http.createServer((solicitud, respuesta) => {
  fs.readFile('index.html', (error, contenido) => {
    if (error) {
      respuesta.writeHead(500);
      respuesta.end('Internal server error');
    } else {
      respuesta.writeHead(200, { 'Content-Type': 'text/html' });
      respuesta.end(contenido, 'utf-8');
    }
  });
});

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
