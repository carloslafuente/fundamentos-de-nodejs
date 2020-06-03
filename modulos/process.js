const p = require('process');

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('El proceso ha terminado');
  setTimeout(() => {
    console.log('Esto NO se va a ver');
  }, 0);
});

process.on('uncaughtException', () => {
  console.error('He olvidado capturar un error');
  setTimeout(() => {
    console.log('Esto viene de las excepciones');
  }, 0);
});
// process.on('unhandledRejection');

funcionQueNoExiste();
console.log('Si el error no se recoje, no sale');
