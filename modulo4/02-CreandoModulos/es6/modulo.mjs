
//hacemos la funcion
function sayHello() {
    console.log('Hola desde la el archivo modulo.mjs');
}

const property1 = 'Property 1 String value';
const property2 = 2;

//llamamaos a export para poder exportar lo que queremos en esta funcion
export default {sayHello,property1,property2};