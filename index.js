const http = require('http');
const fs = require("fs")
const {strings_helps}= require('./strings_helps') 
const createLink = require ("./createLink.js")
require("dotenv").config()


if ()process.argv.length<3){
    throw new Error("Numero de argumentos ivalidos")
}

const PORT = process.even.PORT 
const dir = process.argv[2]

const server = http.createServer(function(req,res){

res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
if (req.url === "/"){
    fs.readdir(dir, (err,files) =>{
        if (err)throw new Error(err);
        files.forEach(file => res.write('${Upper.(file)}<br>'));
        res.end();
    })
    else{
       fs.readFile('.${req.url}',"utf-8", (erro, content)=>{
        if (erro) throw new Error(erro)
        res.end(content)
       })
       res.end(req.url)

    })};



    
fs.readdir(dir, (err,files) =>{
    if (err)throw new Error(err);
    files.forEach(file => res.write('${Upper.(file)}<br>'));
    res.end();
});



Server.listen(5678,()=>{
    console.log("servidor iniciado na porta 5678");
})
