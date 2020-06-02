function hola(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    callback(nombre);
  }, 3000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    otroCallback();
  }, 2000);
}

console.log('Iniciando Proceso');
hola('Carlos', (nombre) => {
  adios(nombre, () => {
    console.log('Terminando Proceso');
  });
});

// console.log('Iniciando Proceso');
// hola('Carlos', () => {});
// adios('Carlos', () => {
//   console.log('Terminando Proceso');
// });
