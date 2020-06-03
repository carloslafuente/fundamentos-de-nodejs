// Tuve que instalar python
// Tuve que instalar las herramientas de desarrollo de C++
// node-gyp configure
// node-gyp build

const miAddon = require('./build/Release/addon');

console.log(miAddon.hello());
