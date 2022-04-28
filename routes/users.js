const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');
const usuariosRouter = Router();


const usuariosData = [];


usuariosRouter.route('/')
    .get((req,res)=>{
        res.json(usuariosData)
    })
    .post((req, res)=>{
        const user = req.body
        user.id = uuidv4()   
        usuariosData.push(user)
        res.status(201).json(user);
    })
    .put((req, res)=>{
        res.send('Router Usuarios PUT')
    })
    .delete((req, res)=>{
        res.send('Router Usuarios DELETE')
    })

    
    usuariosRouter.get('/:id', (req, res)=>{
        console.log(req.params.id);
        const id = req.params.id
        const usuario = usuariosData.filter((user)=> user.id == id )
        res.status(200).json(usuario)
    })

    usuariosRouter.get('/usuarios', function (req, res) {
        res.sendFile(`${__dirname} '/public/usuarios.html'`)
        
        })



module.exports = usuariosRouter

