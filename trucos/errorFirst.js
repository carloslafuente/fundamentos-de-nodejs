function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1500);
}

asincrona((err, dato) => {
  if (err) {
    console.error(`Tenemos un error: ${err.message}`);
    return false;
    // throw new Error(err);  // NO VA A FUNCIONAR, EL THROW VA BIEN PARA FUNCIONES SINCRONAS
  }
  console.log(`Todo ha ido bien, la data es: ${dato}`);
});
