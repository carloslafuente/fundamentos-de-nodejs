// Buffer nos permite trabajar con datos
// en su versión más básica (sin tener que definir si son string, números o cualquier otro) - su versión binaria.
/*Información relacionada:
https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/
https://nodejs.org/docs/latest-v12.x/api/buffer.html
*/

// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 3]);
let buffer = Buffer.from('Hola');

// console.log(buffer);

let abc = Buffer.alloc(26);

console.log(abc);

for (let i = 0; i < abc.length; i++) {
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());
