const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const notasPath = './notas';

if (!fs.existsSync(notasPath)) {
    fs.mkdirSync(notasPath);
}

function menu() {
    console.log(`
        MENÚ:
        1. Crear nueva nota
        2. Editar nota existente
        3. Eliminar nota
        4. Salir
    `);
    rl.question('Selecciona una opción: ', handleMenu);
}

function handleMenu(opcion) {
    switch (opcion.trim()) {
        case '1':
            crearNota();
            break;
        case '2':
            editarNota();
            break;
        case '3':
            eliminarNota();
            break;
        case '4':
            console.log('¡Hasta luego!');
            rl.close();
            break;
        default:
            console.log('Opción inválida.');
            menu();
    }
}

function crearNota() {
    rl.question('Nombre de la nueva nota (sin extensión): ', (nombre) => {
        const filePath = path.join(notasPath, `${nombre}.note`);
        fs.writeFileSync(filePath, '', 'utf8');
        console.log(`Nota ${nombre} creada.`);
        menu();
    });
}

function listarNotas(callback) {
    const files = fs.readdirSync(notasPath).filter(f => f.endsWith('.note'));
    if (files.length === 0) {
        console.log('No hay notas disponibles.');
        menu();
    } else {
        console.log('Notas disponibles:');
        files.forEach((file, index) => console.log(`${index + 1}. ${file}`));
        callback(files);
    }
}

function editarNota() {
    listarNotas((files) => {
        rl.question('Selecciona el número de la nota a editar: ', (num) => {
            const index = parseInt(num.trim()) - 1;
            if (index >= 0 && index < files.length) {
                const filePath = path.join(notasPath, files[index]);
                console.log('Escribe el contenido de la nota. Línea en blanco dos veces para terminar:');
                const stream = fs.createWriteStream(filePath, { flags: 'a' });
                rl.on('line', (line) => {
                    if (line.trim() === '') {
                        rl.question('¿Deseas guardar los cambios? (S/N): ', (res) => {
                            if (res.toLowerCase() === 's') {
                                stream.end();
                                console.log('Nota guardada.');
                                menu();
                            }
                        });
                    } else {
                        stream.write(line + '\n');
                    }
                });
            } else {
                console.log('Número inválido.');
                menu();
            }
        });
    });
}

function eliminarNota() {
    listarNotas((files) => {
        rl.question('Selecciona el número de la nota a eliminar: ', (num) => {
            const index = parseInt(num.trim()) - 1;
            if (index >= 0 && index < files.length) {
                const filePath = path.join(notasPath, files[index]);
                fs.unlinkSync(filePath);
                console.log(`Nota ${files[index]} eliminada.`);
                menu();
            } else {
                console.log('Número inválido.');
                menu();
            }
        });
    });
}

// Inicio del programa
menu();
