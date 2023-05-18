//En este ejemplo estamos haciendo una peticion http
//declaramos una variable llamada http
const http = require("http");

/*
Llamamos al metodo createServer, este recibe una funcion que a su ves tiene 2 argumentos lo cuales son request 
y response
Request es un objeto que contiene información sobre la solicitud HTTP entrante, como la URL
Response es un objeto que se utiliza para enviar una respuesta HTTP al cliente que realizó la solicitud
Al final, en listen ponemos el puerto donde queremos que se ejecute
*/
http.createServer(router).listen(3000);

function router(request, response) {
  //cuando nosotros ingresemos a localhost:3000 se activara esa funcion
  console.log("Nueva peticion!"); //al entrar Se imprimira (en nuestra consola) este texto

  console.log(request.url); //Nos dice la url que estamos haciendo request

  switch (request.url) {
    //si nosotros ponemos localhost:3000/hola se imprimira en la pagina Hola que tal
    case "/hola":
        //para imprimir en pagina es necesario poner el metodo write()
      response.write("Hola que tal");
      //metodo end es para finalizar una respuesta http
      response.end();
      break;
    default:
      response.write("Error 404: no se lo que quieres");
      response.end();
  }

  //si no teniamos lo de arriba y solo poniamos localhost:3000 se imprimia lo de abajo
  /*  response.write("Hola, ya se usar HTTP de node.js");

    response.end();  */
}

console.log("escuchando http en el puerto 3000");
