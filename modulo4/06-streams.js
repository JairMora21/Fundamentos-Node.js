/* 
¿Que son los streams?
Las Streams son colecciones de datos, como matrices o cadenas. La diferencia es que las transmisiones pueden no 
estar disponibles de una vez y no tienen que caber en la memoria. Esto hace que las transmisiones sean realmente 
poderosas cuando se trabaja con grandes cantidades de datos, o datos que provienen de una fuente externa o un 
fragmento a la vez.

Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming (readable stream, 
porque solo podemos ver los videos mas no editarlos) ya que lo vemos al mismo tiempo en que este se está 
descargando. de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.
*/

const fs = require("fs");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");
//Esto nos ayuda a traducir desde un inicio como un toString()
readableStream.setEncoding("utf-8");
readableStream.on("data", (chunk) => {
  //console.log(chunk)
  // si tuvieramos muchos datos podriamos utilizar
  data += chunk;
}); //Hola soy un archivo

readableStream.on('end')



//CORREJIR EN UN FUTURO
const stream = require('stream');
const util = require('util');
const transform = stream.transform;

function Mayus(){
transform.call(this);
}
util.inherits(Mayus(), transform)

Mayus.prototype._transform = (chunk, codif, cb) => {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb()
}

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);