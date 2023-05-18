
/* 
Los modulos globales son módulos del core.
Una de las funciones muy usadas en Node es setInterval, clearInterval, para evaluar en n tiempo si el servidor 
está caído o no.

TIP: Si no tengo que usar variables globales no usarlas, pues son un foco de problema
*/
console.log(global);
//Imprime esto
/*Object [global] {
    global: [Circular], ---> Dependencias ciruculares.
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
  }
*/

require(); //nos permite acceder a cualquier modulo

let i =0; //  Inicializo contador en cero
let intervalo = setInterval(() => {  // Asigno el setInterval a una variable intervalo para poder operarla luego.
    console.log(" Jair "); // Imprimo mi nombre
    if (i === 3){ // Con i === 3 imprima mi nombre hasta que de cero llega a 3 y luego haga clearInterval.
        clearInterval(intervalo);  //clear interval sirve para detener un setInterval
    }
    i ++;
}, 1000);


setImmediate(()=>{ //imprime un texto inmediatamente
    console.log("Ya mismo")
})

clearTimeout(); //sirve para setener un setTimeOut