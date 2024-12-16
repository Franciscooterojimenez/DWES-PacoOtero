import fs from 'fs';

async function leerArchivoAsync() {
  const file = 'fichero.txt';

  try {
    const contenido = await fs.promises.readFile(file, 'utf-8');
    console.log('Contenido del archivo:', contenido);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

leerArchivoAsync();
