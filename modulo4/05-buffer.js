/* 
¿Que es un buffer?
En resumen son datos en binario, que van viniendo y se van de un lado para otro, un ejemplo de esto 
podria ser que cuando trabajabamos con FileSystem, cuando traimos datos nos venian datos extraños que 
teniamos que convertir
*/

//Nos guarda un pedazo de memoria 
let buffer = Buffer.alloc(4);
console.log(buffer); // <Buffer 00 00 00 00>
//|---------------------------------------------|

//Si queremos guardar un array asi seria
let buffer2 = Buffer.from([1,2,3]);
console.log(buffer2); // <Buffer 01 02 03>
//|---------------------------------------------|

//Si guardamos texto no lo cambia a binario
let buffer3 = Buffer.from('Hola');
console.log(buffer3); //<Buffer 48 6f 6c 61>
//Decifra los datos
console.log(buffer3.toString()); //Hola
//|---------------------------------------------|

//Vamos a poner el abecedario (por eso el espacio de 26)
let abc = Buffer.alloc(26);

for(let i = 0; i<26; i++){
    abc[i] = i + 97;
}

console.log(abc.toString()); // abcdefghijklmnopqrstuvwxyz

/* 
Esto nos sirve para trabajar dato a dato, paquete a paquete para ´pder hacer cualquier tipo de transformacion,
esto lo escribimos en memoria, no lo escribimos en un sitio, todo esto fue con crear un buffer y crear byte 
a byte para tener la info que nosotros queremos 
*/






 
