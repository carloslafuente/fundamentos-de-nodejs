console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');
var tabla = [
  {
    a: 1,
    b: 'Hola',
  },
  {
    a: 2,
    b: 'Adios',
  },
];
console.table(tabla);

console.group('Conversacion');
console.log('Hola');
console.group('Bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.groupEnd('Bla');
console.log('Adios');
console.groupEnd('Conversacion');

console.log('Otra cosa de otra funcion');

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('otrasVeces');
console.count('otrasVeces');
console.count('otrasVeces');
console.count('otrasVeces');
