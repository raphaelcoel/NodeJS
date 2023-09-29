import http from 'node:http';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config()
import { createLink, voltar } from './util.js';

if (process.argv.length < 3){
    throw new Error("Numero de argumentos invalidos")
}

const PORT = process.env.PORT ?? 6767
const dir = process.argv[2]

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8"})
    
    if (req.url === "/"){

        fs.readdir(dir, (err, files) => {

            if (err)

            //files.forEach(file => res.write(`${file}<br>`));
            //files.forEach(file => res.write(`${str_helpers.upper(file)}<br>`));
            //files.forEach(file => res.write(util.createLink(dir, file)));

            files.forEach(file => res.write(createLink(dir, file)));
            
            res.end()
        })

    } else if (req.url.startsWith("favicon.ico")){
        res.end("Favicon")

    } else {

        //res.write(util.voltar())
        res.write(voltar())

        fs.readFile(`.${req.url}`, "utf-8", (err, content) => {
            if (err) throw new Error(err)
            res.end(content)
        })

    }

})

server.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`)
});