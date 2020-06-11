const { app, BrowserWindow } = require('electron');

let ventanaPrincipal;

app.on('ready', crearVentana);

function crearVentana() {
  ventanaPrincipal = new BrowserWindow({
    width: '800px',
    height: '600px',
  });

  ventanaPrincipal.loadFile('index.html');
}
