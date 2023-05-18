const moment = require('moment')

//Este modulo nos ayuda todo lo que tiene que ver con las fechas 
let ahora = moment();

console.log(ahora.toString()); //Thu May 11 2023 13:15:33 GMT-0600

//Esto nos permite poner las fecha al formato que nosotros queremos
console.log(ahora.format('YYYY/MM/DD - HH:mm')); // 2023/05/11 - 13:15