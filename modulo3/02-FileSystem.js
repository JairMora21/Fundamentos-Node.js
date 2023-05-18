/* 
¿Para que sirve el File System?
Es un sistema que nos va a permitir acceder a archivos, lerlos, escribirlos modificarlos, cambiarles el nombre
entre otras miles de cosas. Esto es muy util cuando trabajamos con recopiladores, bases de datos

En el siguiente ejemplo veremos como leer, escribir y borrar archivos
*/

/* Esta sentencia es para node.js y es usada para importar modulos, esto nos permitira trabar con con el sistema de 
archivos del sistema operativo en el que se esta ejecutando Node.js esto nos permite crear, leer actualizar
y eliminar archivos */
const fs = require("fs");

//esta funcion nos permite leer archivos, tiene 2 parametros el cual le debemos pasar la ruta y un callback
function leer(ruta, cb) {
  //readFile lee el archivo y el metodo recibe 2 parametros el cual el primero es la ruta y despues el callback
  fs.readFile(ruta, (err, data) => {
    //si todo esta correcto se mandara a llamar el callback y el metodo toString traducira el texto del archivo
    cb(data.toString());
  });
}

//esta funcion nos creara nuevos archivos en el cual podremos escribir textos, como parametros nos pide la ruta en
//la cual se guardara el archivo, el contenido del archivo y el callback que se ejecutara
function escribir(ruta, contenido, cb) {
  //writeFile recibe la ruta donde se guardara, luego el contenido y al final el cb 
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("No pude escribirlo", err);
    } else {
      console.log("Se a escrito correctamente");
    }
  });
}

//esta funcion nos sirve para borrar un archivo, recibe la ruta del archivo a borrar y el cb 
function borrar(ruta, cb) {
    //unlink recibe como argumentos la ruta del archivo a borrar y un cb
  fs.unlink(ruta, (err) => {
    if (err) {
      cb("No se encontro el archivo");
    } else {
      cb("Se borro correctamente");
    }
  });
}
//__dirname sirve para que nos de la ruta actual del directorio, en este caso retorna lo siguiente
//C:\Users\JAIR\OneDrive\Cursos Platzi OneDrive\Node.js\Fundamentos-de-node\projects\modulo3
leer(__dirname + "/archivo.txt", console.log);
escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);
borrar(__dirname + "/archivo1.txt", console.log);
