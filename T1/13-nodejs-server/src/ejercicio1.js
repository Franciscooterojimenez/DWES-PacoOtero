import http from 'http';

const servidor = http.createServer((solicitud, respuesta) => {
  respuesta.end('Hello World!\n');
});

const puerto = 4000;
servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
