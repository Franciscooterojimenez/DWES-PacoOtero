const events = require('events');
const eventEmitter = new events.EventEmitter();

// Crear un evento personalizado
eventEmitter.on('greet', function(name) {
  console.log('Hello, ' + name);
});

// Emite el evento 'greet'
eventEmitter.emit('greet', 'Alice');