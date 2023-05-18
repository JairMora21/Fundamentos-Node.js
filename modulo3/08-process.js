const { error } = require("console");


process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabo');
});

process.on('uncaughtException', (err,origen) => {
    console.error('Se nos olvido capturar un error');
    console.error(err);
});

funcionQueNoExiste();