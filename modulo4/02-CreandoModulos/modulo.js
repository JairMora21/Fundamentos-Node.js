
//Creamos una funcion x para est emodulo
function saludar(){
    console.log('Hola Mundo!');
}

//Para poder usarla en otros archivos necesitamos exportarla, por lo que mondremos modulo.exports = lo que exportaremos

//En este caso exportaremos un objeto que tendra saludar() y otra funcion que diga hola que tal
module.exports = {
    saludar,
    porp1:'Hola que tal'
};