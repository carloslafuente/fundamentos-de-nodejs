async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 3000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla');
      resolve(nombre);
    }, 1500);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve(nombre);
    }, 2000);
  });
}

async function main() {
  let nombre = await hola('Carlos');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Terminando proceso');
}

console.log('Iniciando proceso');
main();
