console.clear(); //sirve para limpiar la consola


//Imrpime algo en consola
console.log("Holaaa");

//Es lo mismo a log pero esto lo usamos para informar
console.info("Cuidado");

//Esto lo usamos cuando queremos informar de un error aveces puede cambiar de color dependiendo la consola
console.error("Nuevo error");

//Lo usamos cuando puede haber un potencial error
console.warn("Posible error");

//tambien nos sirve de contadores
console.count("Veces"); //Veces: 1
console.count("Veces"); //Veces: 2
console.count("Veces"); //Veces: 3
//Si queremos reiniciar el contador tenemos el metodo countReset()
console.countReset("Veces"); //No imprime nada, solo resetea
console.count("Veces"); //Veces: 1

var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Y",
  },
];
//Muestra una tabla apartir de un objeto
console.table(tabla);
/* 
┌─────────┬───┬─────┐
│ (index) │ a │  b  │
├─────────┼───┼─────┤
│    0    │ 1 │ 'Z' │
│    1    │ 2 │ 'Y' │
└─────────┴───┴───── 
*/
//nos permite "agrupar" multiples logs
console.group("Conversasion");
console.log("Hola");
console.log("blablabla");
console.log("Adios");
console.groupEnd("Conversasion");
/* Se IDENTA la conversacion
Conversasion
  Hola
  blablabla
  Adios
*/

/* 
EJEMPLO REAL dentro de funciones
*/

function funcion1() {
  console.group("Funcion 1");
  console.log("Esto es de funcion 1");
  console.log("Esto tambien 1");
  funcion2();
  console.log("He vuelto a la 1");

  console.groupEnd("Funcion 1");
}

function funcion2() {
  console.group("Funcion 2");
  console.log("Ahora estamos en la funcion 2");
  console.log("Seguimos en la funcion 2");
  console.groupEnd("Funcion 2");
}

console.log("Empezamos");
funcion1();
/* 
Empezamos
Funcion 1
  Esto es de funcion 1
  Esto tambien 1
  Funcion 2
    Ahora estamos en la funcion 2
    Seguimos en la funcion 2
  He vuelto a la 1
*/
