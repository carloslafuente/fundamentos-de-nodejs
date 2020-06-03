const http = require('http');

function router(req, res) {
  console.log('Nueva peticion');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal');
      res.end();
      break;
    default:
      res.write('No se lo que quieres');
      res.end();
      break;
  }

  // Escribir respuesta al usuario
  res.writeHead(201, { 'Content-Type': 'text/plain' });

  res.end();
}

http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');
