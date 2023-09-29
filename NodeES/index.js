const http = require('http');
const fs = require("fs");
const express = require("express");
const app = express();
const path = require('path');
const {strings_helps}= require('./strings_helps') 
import { createLink, voltar } from './createLink.js';
import dotenv from 'dotenv';
require("dotenv").config()

if (process.argv.length<3){
  throw new Error("Numero de argumentos ivalidos")
}
  var arquivos 


  const PORT = process.env.PORT ?? 8081
  const dir = process.argv[2]
  
  const server = http.createServer((req, res) )=> {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
  
    if (req.url === "/"){
  
        fs.readdir(dir, (err, files) => {
        if (err)throw new Error(err);
        //console.log(err)
        // else {
        // console.log("\Arquivos:");
        //files.forEach(file => {
        // if (path.extname(file) == ".txt")
           //  console.log(file);
           //arquivos = arquivos + "<a href=/ "+ file + ">" + file + "</a><br>";
          files.forEach(file => res.write(createLink(dir, file)));
          res.end()
      })
         }else{
          res.write(voltar())
          fs.readFile(`.${req.url}`, "utf-8", (err, content) => {
              if (err) throw new Error(erro)
              res.end(content)
         }
     }
     
  }
      
fs.readdir(dir, (err,files) =>{
  if (err)throw new Error(err);
  files.forEach(file => res.write('${Upper.(file)}<br>'));
  res.end();
});

Server.listen(8081, function(){
    console.log("Rodando");

})