function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(callback) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en mi funcion asincrona');
      callback(error);
    }
  }, 1500);
}

try {
  seRompeAsincrona((err) => {
    console.log('Hay error');
    console.log(err.message);
  });
} catch (error) {
  console.error('Algo se ha roto');
  console.error(error.message);
  console.log('Hemos capturado el error');
}
console.log('Esto se ejecuta al final');

//  Recordatorio closures: Funciones internas que acceden a variables
//  de las funciones externas que las contienen
//  emulando variables privadas

// function Nombre() {
//   let nombre = 'Vacio';
//   return {
//     getNombre: () => {
//       return nombre;
//     },
//     setNombre: (name) => {
//       nombre = name;
//     },
//   };
// }

// const nombreCarlos = Nombre();
// console.log(nombreCarlos.getNombre());

// nombreCarlos.setNombre('Carlos');
// console.log(nombreCarlos.getNombre());
