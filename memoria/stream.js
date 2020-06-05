const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', (chunk) => {
//   data += chunk;
// });

// readableStream.on('end', () => {
//   console.log(data);
// });

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');
// process.stdout.write('?');

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
};

// Con arrow Function no funciona por el scope con el que trabaja
// en arrow function se usa el scope del objeto que las crea
// mientras que una funcion usa el scope global

// Mayus.prototype._transform = (chunk, codif, callback) => {
//   chunkMayus = chunk.toString().toUpperCase();
//   this.push(chunkMayus);
//   callback();
// };

let mayus = new Mayus();
// console.log(mayus);
readableStream.pipe(mayus).pipe(process.stdout);
