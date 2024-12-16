import http from 'http';
import fs from 'fs';

const servidor = http.createServer((solicitud, respuesta) => {
  const { url } = solicitud;

  if (url === '/page') {
    const archivo = 'index.html';
    const nombreArchivo = 'index.html';

    fs.readFile(archivo, (error, contenido) => {
      if (error) {
        respuesta.writeHead(500);
        respuesta.end('Error interno del servidor');
      } else {
        respuesta.writeHead(200, {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="${nombreArchivo}"`,
        });
        respuesta.end(contenido);
      }
    });
  } else if (url === '/error') {
    const archivo = 'error.html';
    const nombreArchivo = 'error.html';

    fs.readFile(archivo, (error, contenido) => {
      if (error) {
        respuesta.writeHead(500);
        respuesta.end('Error interno del servidor');
      } else {
        respuesta.writeHead(200, {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="${nombreArchivo}"`,
        });
        respuesta.end(contenido);
      }
    });
  } else {
    respuesta.writeHead(404, { 'Content-Type': 'text/plain' });
    respuesta.end('Página no encontrada');
  }
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
