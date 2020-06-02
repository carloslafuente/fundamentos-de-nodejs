const fs = require('fs');

function leer(path, callback) {
  fs.readFile(path, (error, data) => {
    callback(data.toString());
  });
}

function escribir(path, content, callback) {
  fs.writeFile(path, content, (error, data) => {
    if (error) {
      console.error(`No he podido escribir el archivo: ${error}`);
    } else {
      console.log('Se ha escrito el archivo correctamente');
    }
  });
}

function borrar(path, callback) {
  fs.unlink(path, (error, data) => {
    if (error) {
      console.error(`No se pudo eliminar el archivo: ${error}`);
    } else {
      console.log('Archivo eliminado correctamente');
    }
  });
}

// leer(__dirname + '/archivo.txt', console.log);
// escribir(__dirname + '/archivo.txt', 'Soy un archivo', console.log);
// borrar(__dirname + '/archivo.txt', () => {});
