const bcrypt = require('bcrypt');

const password = '123Segura!';

bcrypt.hash(password, 5, (error, encrypted) => {
  console.log(encrypted);

  bcrypt.compare(password, encrypted, (error, areTheSame) => {
    console.log(areTheSame);
  });
});
