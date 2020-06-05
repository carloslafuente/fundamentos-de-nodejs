console.time('todo');

let suma = 0;
console.time('bucle');
for (let i = 0; i < 10000000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

console.time('asincrona');
console.log('Empieza el proceso asincrono');
asincrona().then(() => {
  console.timeEnd('asincrona');
});

let suma2 = 0;
console.time('bucle2');
for (let j = 0; j < 10000000; j++) {
  suma += 1;
}
console.timeEnd('bucle2');

console.timeEnd('todo');

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      resolve();
    }, 2500);
  });
}
