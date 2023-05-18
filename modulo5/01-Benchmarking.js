/* 
Esto es para detectar procesos que son mas lentos que los que deberian, nos dira exactamente cuanto
tiempo se tardo x funcion en ejecutar
*/

let suma = 0;
//ponemos un console.time antes del proceso que queramos checar
console.time("bucle");

for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}

//ponemos un timeEnd cuando queremos que finalice y despues nos mostrara el tiempo
console.timeEnd("bucle"); // bucle: 2.367s

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Termina");
      resolve();
    });
  });
}

console.time("Asincrona");
console.log('Empieza el proceso asincrono');
asincrona().then(() => console.timeEnd("Asincrona")); // Asincrona: 5.142ms
