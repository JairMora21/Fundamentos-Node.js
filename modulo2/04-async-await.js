/* 
Async-Await
Permite definir una funcion de forma explicita y podes esperar a que esta funcion termine
*/

//Para empezar debemos de poner async antes de la palabra function
async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("blablabla....");
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function main() {
 let nombre = await hola("Jair");
  await hablar();
  await hablar();
  hablar(); // si quitamos el await no esperara y ejecutara la funcion al momento
  await adios(nombre);
  console.log("Termina el proceso");

}

console.log("Empezamos el proceso");
main();
// console.log("Termino"); si tuvieramos aqui este codigo primero se imprimiria el primer log y despues este

