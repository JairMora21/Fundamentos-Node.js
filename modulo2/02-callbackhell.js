/* 
CALL BACK HELL: REFACTORIZAR O SUFRIR
El "callback hell" se refiere a un patrón de código JavaScript con múltiples funciones de devolución de llamada anidadas, 
lo que puede hacer que el código sea confuso y difícil de entender y mantener. Se produce cuando hay muchas operaciones 
asincrónicas encadenadas, lo que crea una estructura de código desordenada y poco legible.
*/
function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log(`Hola, ${nombre}`);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("blablabla....");
    callbackHablar();
  }, 1000);
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    callback();
  }, 1000);
}

//ESTE codigo es un callback hell lo cual no es una buena practica de programacion
/* hola("Jair", () => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        hablar(() => {});
      });
    });
    adios("Jair", () => console.log("Terminamos el proceso"));
  });
}); */

//una manera de eliminar es creando funciones especificas que nos ayuden, por ejemplo una funcion conversacion
//Esta funcion tiene la manera de decir cuantas veces hablaremos, cosa que antes nos generaca un callbackhell
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => conversacion(nombre, --veces, callback));
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando proceso...");
const miNombre = 'Jair';
hola(miNombre, (nombre) => {
  conversacion(nombre, 3, () => {
    adios(miNombre, () => {
      console.log("Proceso terminado.");
    });
  });
});
