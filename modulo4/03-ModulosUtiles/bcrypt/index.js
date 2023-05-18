const bcrypt = require("bcrypt");

//Este modulo es para encriptar contraseñas, nosotros recibimos una contraseña y la encriptamos gracias a bcrypt
const password = "1234segura";
//El metodo hash la encripta, recibe 3 argumentos el cual es la contraeña, cuantas veces lo revisara y un callback
bcrypt.hash(password, 3, (err, hash) => {
  console.log(hash);
  //Puede comparar para ver si la contraseña normal y la encriptada son iguales
  //recibe 3 argumentos, la contraseña normal, la encriptada y un callback, esto devuelve un true o false
  bcrypt.compare(password,hash, (err, res) => {
    //console.log(err);
    console.log(res);
  })
});
