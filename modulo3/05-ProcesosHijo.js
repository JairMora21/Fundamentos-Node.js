const { exec, spawn } = require("child_process");
/* 
Este exec sirve para poder ejecutar diferentes archivos en este archivo, esto puede llegar a ser util si tenemos 
un programa de python (por ejemplo) y no queremos transcribirlo en js, entonces podemos llamarlo para correrlo
aqui sin la necesidad de transcribirlo 

esto puede recibir 3 argumentos 

exec(comando[, opciones][, callback])

Comando: el comando que se va a ejecutar
Opciones: Opciones adicionales para la ejecución del comando como cwd(directorio de trabajo), env(Variables de
entorno) y encoding (codificacion de caracteres al utiliz<r la salida de comando)
Callback: Se ejecutara cuando termine la funcion y se puede usar el error(contiene info del error procucido), 
stdout(Cadena oon la salida de comando) y stderr (contiene la salida de error del comando)
*/



exec('node modulo3/05-hijo.js',(err,stdout, stderr) => {
    if (err){
        console.error(err);
        return false;
        
    }
    console.log(stdout + "Texto"); //hola, me estoy ejecutando desde otro archivo Texto
})

//Tambien existe el metodo spawn
let procesoo = spawn('ls', ['-la']);
/* 
spawn es una función asíncrona que crea un nuevo proceso y ejecuta un comando especificado en ese proceso. 
La función spawn toma dos argumentos: el primer argumento es el comando a ejecutar, y el segundo argumento
es un objeto de opciones que se utiliza para especificar opciones adicionales para la ejecución del comando

Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
Usa spawn cuando quieras recibir datos desde que el proceso arranca.
Usa exec cuando solo quieras recibir datos al final de la ejecución.
*/

let proceso = spawn('cmd.exe', ['/c','dir']);
proceso.stdout.on('data', function(dato){
    console.log(dato.toString());
})


//Curiosidad: estos comandos son muy potentes, incluso podemos abrir una pestaña de chrome con este comando 
exec('start chrome');
