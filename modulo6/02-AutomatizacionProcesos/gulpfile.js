/* 
Que es gulp.js? 📖🖥💥

Es una herramienta de construcción en JavaScript construida sobre flujos de nodos . Estos flujos facilitan 
la conexión de operaciones de archivos a través de canalizaciones . Gulp lee el sistema de archivos y canaliza 
los datos disponibles de un complemento de un solo propósito a otro a través del .pipe()operador, haciendo una 
tarea a la vez. Los archivos originales no se ven afectados hasta que se procesan todos los complementos. 
Se puede configurar para modificar los archivos originales o para crear nuevos. Esto otorga la capacidad de 
realizar tareas complejas mediante la vinculación de sus numerosos complementos. Los usuarios también pueden 
escribir sus propios complementos para definir sus propias tareas
*/


const gulp = require('gulp');
const server = require('gulp-server-livereload')

//Asi creamos tareas, esta solo nos dice que se creara un sitio 
gulp.task('build', (cb) =>{
    console.log('Construyendo el sitio');
    cb();
    setTimeout(cb,1200);
})

//Esta tarea creara un nuevo servidor
gulp.task('serve', (cb)=>{
    gulp.src('www').pipe(server({
        livereload: true,
        open: true,
    }))
})

//Esta tarea hae las 2 tareas anteriores a la ves
gulp.task('default', gulp.series('build','serve'));

/* Para que funcione debemos de poner el nombre de estas tareas en el package.json
en el apartado de scripts, despues podemos mandar a llamar las tareas desde la terminal 
con el comando "npm run <nombre tarea>" */