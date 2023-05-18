
/* 
El módulo os en Node.js proporciona funciones y propiedades para interactuar con el sistema 
operativo en el que se ejecuta la aplicación, como obtener información del sistema y manipular rutas de archivo.
*/

const { log } = require('console');

const os = require('os');

//Nos dara nuestra plataforma
//console.log(os.platform()); // win32

//Nos dara de cuentos x es nuestra compu
//console.log(os.arch()); //x64

//console.log(os.constants); //Nos daran todos los errores del sistema

//console.log(os.freemem()); //1886920704  (memoria disponible en bytes)

//cuantos cpus hay tenemos
//console.log(os.cpus().length); // 8

//datos del cpu
//console.log(os.cpus()); 

console.log(os.homedir()); //C:\Users\JAIR

/* 
aparecen mas pero esto es un ejemplo de su funcion
{
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: {
      user: 3380015,
      nice: 0,
      sys: 3555968,
      idle: 70840437,
      irq: 289406
    }
*/























const os = require('os')

// Architecture
console.log('Architecture:')
console.log(os.arch())
console.log('')

// Platform
console.log('Platform:')
console.log(os.platform())
console.log('')

// cpus
console.log('cpus')
console.log(os.cpus().length)
console.log('')

// Errores y señales del sistema
console.log('Erros and signals of the system')
console.log(os.constants)
console.log('')





// Function to convert from bytes to kbytes, mbytes and gbytes
const SIZE = 1024

kb = bytes => { return bytes / SIZE }
mb = bytes => { return kb(bytes) / SIZE }
gb = bytes => { return mb(bytes) / SIZE }

// Total Ram Memory
console.log('Total Ram Memory:')
console.log(`${os.totalmem()} bytes`)
console.log(`${kb(os.totalmem)} kb`)
console.log(`${mb(os.totalmem)} mb`)
console.log(`${gb(os.totalmem)} gb`)
console.log('')

// Free memory we have in bytes units
console.log('Free memory we have in kbytes units')
console.log(`free Ram memory: ${os.freemem()} bytes`)
console.log(`free Ram memory: ${kb(os.freemem())} kb`)
console.log(`free Ram memory: ${mb(os.freemem())} mb`)
console.log(`free Ram memory: ${gb(os.freemem())} mb`)
console.log('')


// Directory for the user root
console.log('Directory for the user root')
console.log(os.homedir())
console.log('')

// Directory for temporal files
console.log('Directory for temporal files')
console.log(os.tmpdir())
console.log('')

// Hostname of a server
console.log('Hostname of any server')
console.log(os.hostname())
console.log('')

// Actived Network interfaces right now
console.log('Network Interfaces right now')
console.log(os.networkInterfaces())
console.log('')
