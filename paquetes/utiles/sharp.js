const sharp = require('sharp');

sharp('original.jpg').resize(200).greyscale().toFile('reSized.jpg');
