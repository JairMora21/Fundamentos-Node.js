function seRompe() {
  return 3 + z;
}

//Este codigo se va a romper y nos va a generar un error
seRompe(); // z is not defined
console.log("Sigue el programa"); //se corta la ejecucion y no imprime nada

/* 
Es importante estar atentos a estos errores, cada ves que pensemos que una funcion puede romperse, debemos 
añadir un try-catch 
*/

//Este codigo se va a romper y nos va a generar un error
try {
  seRompe(); //Algo se a roto
} catch (err) {
  console.error("Algo se a roto"); //Algo se a roto

  //imprime el mensaje que ocasiona el error pero no rompe el programa
  console.error(err.message); //z is not defined
}
console.log("Sigue el programa"); //Sigue el programa
//Este codigo lanzara un error pero no se rompera el programa, lo demas seguira intacto y correra sin problema

function otrFuncion() {
  seRompe();
}
//tambien capturara  el error aunque no sea la misma funcion del error
try {
  otraFuncion();
} catch (err) {
  console.error("Algo se a roto"); //Algo se a roto
}

//si es asycrona debemos definir el try catch dentro de la funcion asincrona
function seRompeAsyncrona(cb) {
  setTimeout(() => {
    try {
      return 2 + z;
    } catch (err) {
      console.log("error en funcion asincrona");
      cb(err);
    }
  }, 1500);
}
