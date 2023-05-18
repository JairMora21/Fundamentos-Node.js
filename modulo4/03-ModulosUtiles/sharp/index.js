const sharp = require('sharp');

//Este modulo nos sirve para poder modificar una imagen, en este ejemplo hare una imagen mas pequeña
sharp('dado.png').resize(80).toFile('resized.png');