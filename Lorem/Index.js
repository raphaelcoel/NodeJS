const http = require("http");
const fsPromises = require('fs').promises;
require("dotenv").config()



const server = http.createServer(function(req,res){

    if(req.url === '/') {
         const CSS = await fsPromises.readFile('Gerador.css', 'utf-8');
         const HTML = await fsPromises.readFile('Gerador.html', 'utf-8');
         const JS = await fsPromises.readFile('Gerador.js', 'utf-8');
 
        res.writeHead(200, { 'Content-Type': 'text/html' });        
  
        res.write(HTML.replace('</head>','<style type="text/css">${CSS}</style></head>'));
        res.write(`<script>${JS}</script>`);
      res.end();

      } else {
       res.writeHead(404, { 'Content-Type': 'text/plain' });
       res.end('Não encontro');
     }
    }