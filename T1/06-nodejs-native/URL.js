const url = require('url');

function descomponerURL(direccion) {
    const parsed = new URL(direccion);

    console.log(`
    Protocolo: ${parsed.protocol}
    Hostname: ${parsed.hostname}
    Ruta: ${parsed.pathname}
    Archivo objetivo: ${parsed.pathname.split('/').pop()}
    Parámetros: ${parsed.search}
    `);
}

// Ejemplo
const ejemploURL = 'https://www.youtube.com/';
descomponerURL(ejemploURL);