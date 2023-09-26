const http = require('http');
const fs = require("fs");
const express = require("express");
const app = express();
const path = require('path');
  var arquivos 

fs.readdir(__dirname, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\Arquivos:");
    files.forEach(file => {
      if (path.extname(file) == ".txt")
        console.log(file);
        arquivos = arquivos +"<br> "+ file;
    })
  }
})

app.get("/", function(req,res){
    res.send("Arquivos <br>"+ arquivos);
})


app.listen(8081, function(){
    console.log("Rodando");

})