const fs = require("fs");
const path = require("path");
const pathFile = process.argv[2];
const links = require("./mdLinks");
const readFileResult = links(pathFile, null);



//funcion que verifica si el campo esta vacio ó lleno
function pathInsert(pathFile){
  if(pathFile == undefined){
    console.log("false");
    return false
  }
  else{
    return true
  } 
};

//función para saber si la ruta existe
function pathExis(pathFile){
  if(fs.existsSync(pathFile)){
    console.log("true");
    return true
  }
    else{
      console.log("false");}
      return false
    };

//función para verificar si la ruta es un directorio
function pathDirectory(pathFile){
  if(fs.statSync(pathFile).isDirectory()){
    return true
  } else{
    return false
  }
};

//función que revisa si es un .md
function pathMd(pathFile){
  if (path.extname(pathFile) === ".md"){
    return true
  }
  else {
    return false
  }
};

//leer el archivo
  readFileResult.then(
    (data)=> { // On Success
     console.log("Found links:");
     url(data);
    },
    (err)=> { // On Error
        console.error(err);
    }
   );


function url(data) {
const mdLinkRgEx = /\[(.+?)\]\((.+?\))/g;
const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
let allLinks = data.match(mdLinkRgEx);
let htmlLinks = [];
for (var x in allLinks) {
let grpdDta = mdLinkRgEx2.exec(allLinks[x]);
let grupoData = {
href: grpdDta[2],
text: grpdDta[1],
file: pathFile
}; 
 htmlLinks.push(grupoData);   
}
console.log(htmlLinks.length);
console.log(htmlLinks);
return (htmlLinks);
   
};


module.exports = {
"pathInsert": pathInsert,
"pathExis": pathExis,
"pathDirectory": pathDirectory,
"pathMd": pathMd,
"url": url,
"readFileResult": readFileResult,
};