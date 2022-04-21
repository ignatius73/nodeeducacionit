const http = require("http")
const PORT = 8080;
const home = require('./home');

const servidor = http.createServer((request, response) =>{
    
    console.log(request.url);
    if( request.url.includes('/api/')){
        response.writeHead(200,{"Content-type":"application/json"})
        switch(request.url){
            default:
                response.end(JSON.stringify([]))
                break;
        }
    }else{
        response.writeHead(200, { "content-type":"text/html"})
        response.end(home);

    }







})

servidor.listen(PORT, ()=>{
    console.log('Escuchando peticiones http');
})
