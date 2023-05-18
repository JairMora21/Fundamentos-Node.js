/* 
Gestion de paquetes: NPM y Package.json

Cuando trabajamos con node.js una de las cosas que siempre tendremos abiertas todo el tiempo junto a la 
documentacion sera NPM, ¿Que es NPM? es un gestor de paquetes hasta ahora todos los modulos que estamos 
utilizando vienen dentro del core de node

https://www.npmjs.com/
En esta web podemos buscar los distintos paquetes que tiene node, por ejemplo podemos buscar"is-odd" para
ver si un numero es impar (si es impar = true, si no, false)
Este modulo lo podemos ver en esta misma carpeta donde de encuentra este archivo y solo con poner el comando 

$ npm install --save is-odd-num            podremos usarlo

Aveces estos modulos pueden tener dependencias, o sea que deben pasar primer por otros modulos para poder 
validar correctamente el resultado, en el ejemplo anterior de "is-old" su dependencia es "is-number" para
validar que sea un numero

Cada ves que busquemos estos paquetes o modulos y sean muy complejos hay que verificar que no sean versiones
BETA o tengan mucho tiempo sin ser actualizados

Vamos a hacer un ejemplo real, vamos a instalar is odd

npm install is-odd

Despues de hacerlo se nos instalara en nuestra carpeta donde estamos usando nuestro archivo lo siguiente
//Las carpatas de abajo son lo que hacen la accion
0. Carpeta: node_modules (contiene las carpetas del punto 1 y 2)
1. Carpeta: is-number (dependencia de is-odd)
2. Carpeta: is-odd
//Las archivos de abajo son informacion de los package
3. package-lock.json 
4. package.json

Ya instalado el paquete podemos usarlo de esta manera
*/

//creamos una constate y usamos require para cargar un el modulo
const isOdd = require('is-odd');

//la usamos
console.log(isOdd(3)); //TRUE     ya que es impar 