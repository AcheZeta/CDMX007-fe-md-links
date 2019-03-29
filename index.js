module.exports = () => {
  // ...
};

//Nombramos variable con el nombre del modulo que queremos importar
let fs = require('fs');
//Variable con el nombre del archivo
let document = ('./README.md')
//Le indicamos el modulo y la acción con tres parámetros.
//1o archivo que deseamos leer.
//2o parametro opcional (carácteres)
//3o Callback con dos parametros, error y el archivo
fs.readFile(document, 'utf-8', (err, data) => {
    if (err) {
        console.log('error: ', err);
    } else {
        console.log(data);
    }
});


