function hola(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    callback(nombre);
  }, 3000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla');
    callbackHablar();
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    otroCallback();
  }, 2000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log('Iniciando Proceso');

hola('Carlos', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso terminado');
  });
});

// hola('Carlos', (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log('Terminando el proceso');
//         });
//       });
//     });
//   });
// });
