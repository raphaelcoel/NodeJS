const http = require('http');
const fs = require("fs");
const express = require("express");
const app = express();
const path = require('path');
  var arquivos 
require('dotenv').config();

const PORT = process.env.PORT ?? 3333;
const server = http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  res.write("Instituto de Computação");
  res.end();
});
server.listen(PORT);