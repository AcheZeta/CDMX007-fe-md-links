module.exports = () => {
  // ...
};

// Nombramos variable con el nombre del modulo que queremos importar
let fs = require('fs');
let path = require('path');
//normalizado. 
// let extname = path.extname()

//READDIR fs 


console.log(process.argv);
 function grab(flag) {
     var index = process.argv.indexOf(flag);
        return(index === -1) ? null : process.argv[index+1];
 }
  var docname = grab('--doc');
  
  if (!docname) {
      console.log("Especifica el nombre del archivo, usa --doc")
  } else {
    //   console.log(`${docname}`)
  }


  var markdownLinkExtractor = require('markdown-link-extractor');

  var markdown = fs.readFileSync('README.md').toString();
  
  var links = markdownLinkExtractor(markdown);
  
  links.forEach(function (link) {
    //   console.log(`link ${link}`);
  });
  
//Le indicamos el modulo y la acción con tres parámetros. 1o archivo que deseamos leer. 2o parametro opcional (carácteres), 3o Callback con dos parametros, error y el archivo
fs.readFile(docname, 'utf-8', (err, data) => {
    if (err) {
        console.log('error: ', err);
    } else {
        const regExp = /(https?:\/\/[^\s]+)/g;
        const result = data.match(regExp);
        console.log(data);
        console.log(`link ${result}`)
    }
});


