function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 3000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla');
      resolve(nombre);
    }, 1500);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve(nombre);
    }, 2000);
  });
}

console.log('Iniciando el proceso');
hola('Carlos')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  // .then(() => {
  //   console.log('termina saludo');
  //   return adios(nombre);
  // })
  .then(adios)
  .then((nombre) => {
    console.log('Terminando el proceso');
  })
  .catch((err) => {
    console.error(err);
  });
