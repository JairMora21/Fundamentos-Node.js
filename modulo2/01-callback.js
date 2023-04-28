
/* 
Datos importantes 
Un callback es una funcion que se pasa como parametro a otra funcion para cuando dicha funcion se haya dado 
por finalizada
*/

function hola(nombre, Micallback) {
  setTimeout(() => {
    console.log(`Hola, ${nombre}`);
    //llamamos a nuestro callback cuando se finalice la funcion
    Micallback();
  }, 1500);
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    callback();
  }, 1000);
}

/* 
hola("Jair", () => console.log("Termina proceso"));
adios("Jair", () => console.log("Terminando proceso"))
 */
//Pasamos como argumentos nuestro callback
hola("Jair", () => console.log("Terminando proceso"))
adios("Jair", () => console.log("Terminando proceso"))

