/*  
Las promesas son una sintaxis mas elegante y legible de realizar callbacks, creando así un código mucho más 
escalable y entendible para todas las personas.

Para usarlas debemos de crear un return seguido de un new Promise() el cual dentro debe de almacenar una funcion
y tendra como parametros resolve y reject, que esto basicamente viene siendo un callback para indicar si la 
operacion fue exitosa(resolve) o fracaso (reject)
*/

//En esta funcion esxplicaremos la promesa
function hola(nombre) {
  //retornamos una nueva promesa, en este caso solo usaremos resolve
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      //cuando la promesa se cumpla lanzaremos un callback
      resolve(nombre);
    }, 1500);
  });
}

//Esta funcion tiene a propisito un reject, lo cual ocasionara un fallo en el programa
function hablarFallo(nombre) {
  // se crea la promesa
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("blablabla....");
      //lanzamos un reject a proposito
      reject(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("blablabla....");
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

//....
//EJEMPLO CORRECTO
/* Despues para ejecutar las promesas podemos llamar a las funciones dependiendo la accion que queremos 
que realizen */
hola("Jair")
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => console.log("Terminado el proceso")); 
//IMPRIME
/* 
Hola, Jair
blablabla....
blablabla....
Adios Jair
Terminado el proceso 
*/

//EJEMPLO CON FALLO
//Empezara la funcion correctamente
hola("Jair")
  .then(hablar)
  .then(hablarFallo) //cuando llegue a esta linea de codigo se saltara por completo al catch para evitar + errores
  .then(adios)
  .then(() => console.log("Terminado el proceso"))
  .catch((err) => console.log("Hubo un error"));
/*
  IMPRIME 
Hola, Jair
blablabla....
blablabla....
Hubo un error
 */



/* 
Lo de arriba es una sitaxis mas legible y mas facil pero tambien esto de abajo es una manera de ponerlo
hola("Jair")
  .then((nombre) => hablar(nombre))
  .then((nombre) => adios(nombre))
  .then((nombre) => console.log("Terminado el proceso"));
 */
