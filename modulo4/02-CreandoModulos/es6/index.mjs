//llamamos a import junto con la ruta del modulo que queremos llamar
import myOwnES6Module from './modulo.mjs';

console.log(myOwnES6Module.property1);
console.log('Property 2 value (number): ', myOwnES6Module.property2);
myOwnES6Module.sayHello();