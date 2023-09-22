const http = require ("node:http")


http.createServer((request, response)=>
{
response.whiteHead(200, {"Content-Type": "text html;charset=utf-"})
    response.write("oi")
   response.end()
})

Server.listen(5678,()=>{
    console.log("servidor iniciado na porta 5678");
})
