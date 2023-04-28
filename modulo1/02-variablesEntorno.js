/* 
Las variables de entorno son importantes ya cuando tenemos iun proyecto profesional no debemos de guardar 
datos importantes dentro de nuestro programa, para eso ese utilizan las variables de entorno
*/

/*Asi se declara una variable de entorno, notese que usamos || para decir que si no se encuentra eñ resultado,
nos de un valor por default */ 
let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'sin web';
/*Despues en la terminal declaramos las variables de esta manera $env:NOMBRE="Jair"; env:WEB="hola.com"
para definir mas de 1 variable de entorno al mismo tiempo se debe de poner ; al final de cada variable, si 
solo se define 1 no sera necesario*/

//Si se definen correctamente el resultado seria...
console.log(`Hola ${nombre}`); // Hola Jair || Hola sin nombre
console.log(`Mi web es ${web}`); // Mi web es hola.com || sin web


/* 
CONSEJO
Si debemos de incluir muchas variables de entorno lo mejor es tener un archivo de ellas, para esto se puede 
utilizar "dotenv" y podemos crear un archivo .env y configurar sus variables necesarias en dicho archivo y 
despues accederlas donde se necesite

require('dotenv').config();
console.log(process.env.NAME);

Mas info: https://www.npmjs.com/package/dotenv
*/