const express = require('express')




const app = express()


const usuarios = [
    {
        id:1,
        nombre:'Gabriel'
    },
    {
        id:2,
        nombre:'Hernán'
    },
    {
        id:3,
        nombre:'Alan'
    }
]
console.log(__dirname);
console.log(__filename);

/****************************
 * 
 * MiddleWares 
 * 
 */
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/home', function (req, res) {
res.sendFile(`${__dirname} '/public/home.html'`)

})
app.get('/usuarios', function (req, res) {
res.sendFile(`${__dirname} '/public/usuarios.html'`)

})

app.get('/users', (req,res)=>{
    res.json(usuarios)
})

app.get('/user/:id/:nombre', (req, res)=>{
    const id = req.params.id
    const nombre = req.params.nombre
    const usuario = usuarios.filter((user)=> user.id == id && user.nombre == nombre)
    res.json(usuario)
})

app.post('/user', (req, res)=>{
    console.log(req.body);
   res.send('Usuario cargado correctamente') 
})

/***********
 * 
 * GET - usuarios - usuarios.html
 * GET - usuario - usuario.html
 * GET - mensajes - mensajes.html
 * 
 * 
 */

app.listen(3000, ()=>{
    console.log('Escuchando peticiones en el puerto 3000');
})