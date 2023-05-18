//Mandamsos a llamar el modulo electron
const {app, BrowserWindow} = require('electron');

let mainWindow;
//Creamos la app de ecritorio
app.on('ready', createWindow);

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
});
mainWindow.loadFile('index.html');
}
