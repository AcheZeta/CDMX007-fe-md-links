'use stric';
//Importa los modulos que vamos a ocupar  
let fs = require('fs');
let path = require('path');
const fetch = require('node-fetch')


 console.log(process.argv);

// function grab(flag) {
//   var index = process.argv.indexOf(flag);
//   return (index === -1) ? null : process.argv[index + 1];
// }
// let docname = grab('--doc');

// if (!docname) {
//   console.log("Especifica el nombre del archivo, usa --doc")
// } else {
//   readFiles()
// }

// //Convertir el Path 
// let filePath = docname
// let pathResolve = path.resolve(filePath)
// let pathNormalize = path.normalize(pathResolve)
// // let pathExtName = path.extname(pathNormalize)

// const validate = (docname) => {
//   docname.forEach(element => {
//     fetch(res => element)
//       .then(res => {
//         const linkStatus = `Element ${element} status${res.status} text${res.statusText}`
//         console.log(linkStatus)
//       })
//       .catch(err => console.log(err))
//   });
// }

// console.log(validate)
// //   )

// //Le indicamos el modulo y la acción con tres parámetros. 1o archivo que deseamos leer. 2o parametro opcional (carácteres), 3o Callback con dos parametros, error y el archivo
// function readFiles() {
//   fs.readFile(docname, 'utf-8', (err, data) => {
//     if (err) {
//       console.log('error: ', err);
//     } else {
//       const regExp = /(https?:\/\/[^\s]+)/g;
//       const result = data.match(regExp);
//       console.log(data);
//       console.log(`links: ${result}`)
//     }
//   });
// }
