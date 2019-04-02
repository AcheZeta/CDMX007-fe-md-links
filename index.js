module.exports = () => {
  // ...
};

// Nombramos variable con el nombre del modulo que queremos importar
let fs = require('fs');
let path = require('path');


console.log(process.argv);
 function grab(flag) {
     var index = process.argv.indexOf(flag);
        return(index === -1) ? null : process.argv[index+1];
 }
  var docname = grab('--doc');
  
  if (!user || !docname) {
      console.log("Falta algo")
  } else {
      console.log(`${docname} ${user}`)
  }

//Le indicamos el modulo y la acción con tres parámetros. 1o archivo que deseamos leer. 2o parametro opcional (carácteres), 3o Callback con dos parametros, error y el archivo
fs.readFile(docname, 'utf-8', (err, data) => {
    if (err) {
        console.log('error: ', err);
    } else {
        console.log(data);
    }
});

// //Crear Variables para que ingresa el usuario. 
// //Argumento2
// let file = process.argv[2]
// //Ruta absoluta
// let pathAb = file.path.resolve
// //extension del archivo. 
// let ext = file.path.extname
 

// console.log(path)

//Variable con el nombre del archivo
// let document = `${docname}`

