const http = require("http")
const PORT = 8080;
const home = require('./home');
const usuarios = require('./usuarios')




const servidor = http.createServer((request, response) =>{
    const url = request.url;
    console.log(request.url);
    if( request.url.includes('/api/')){
        response.writeHead(200,{"Content-type":"application/json"})
        //rest api
        switch(request.url){
            default:
                response.end(JSON.stringify([]))
                break;
        }
    }else{
        //crud
         console.log(url)
      
        switch(url){
            case /[as]/:
                response.writeHead(200, { "content-type":"text/html"})
                response.end(usuarios)
            break;
            default:
                response.writeHead(200, { "content-type":"text/html"})
                response.end(home);

        }

    }







})

servidor.listen(PORT, ()=>{
    console.log('Escuchando peticiones http');
})
