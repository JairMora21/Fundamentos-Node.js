
console.log("Hola");

let i = 0;
setInterval(() => {
  console.log(i);
  i++;

}, 1000);

console.log("segunda instruccion");

/* 
Para correr este proyecto en node.js debemos de abrir la terminal con nuestra ruta del proyecto 
y ponemos el comando "node modulo1/monohilo.js" (sin comillas) y el proyecto correra

JavaScrit es un lenguaje asincrono asi que puede correr todo a la ves, este codigo por ejemplo correra lo siguiente

Hola
segunda instruccion
0
1
2
3
... infinito hasta que lo paremos
*/