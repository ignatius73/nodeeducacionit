import Router from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Usuarios } from '../usuarios.js'

const usuariosRouter = Router();

const usuariosClass = new Usuarios();


let usuariosData = [];
//Middleware personalizado
async function loadUsers(req, res, next){
    const users = await usuariosClass.loadUsers()
    if(users) usuariosData = users

    next();
} 

usuariosRouter.use(loadUsers)

usuariosRouter.route('/api/v1')
    .get(async(req,res)=>{
        const users = await usuariosClass.loadUsers()
        console.log(users);
        if(users) usuariosData = users
        res.json(usuariosData)
    })
    .post(async(req, res)=>{

        console.log(req.body);
        const user = req.body
        user.id = uuidv4() 
        console.log(usuariosData);  
        usuariosData.push(user)
        await usuariosClass.saveUser(JSON.stringify(usuariosData))
        res.status(201).json(user);
    })
    .put((req, res)=>{
        const user = req.body
        user.id = uuidv4()   
        usuariosData.push(user)
        res.status(201).json(user);
    })
    .delete((req, res)=>{
        res.send('Router Usuarios DELETE')
    })

    
    usuariosRouter.get('/api/v1/:id', (req, res)=>{
        console.log(req.params.id);
        const id = req.params.id
        const usuario = usuariosData.filter((user)=> user.id == id )
        res.status(200).json(usuario)
    })

    usuariosRouter.get('/usuarios/:id', function (req, res) {
        res.sendFile(`${process.cwd()}/public/usuarios.html`)
        
        })
    usuariosRouter.get('/usuarios', function (req, res) {
        //res.sendFile(`${process.cwd()}/public/usuarios.html`)

        res.render('usuarios',{
            title:'Usuarios',
            usuarios: usuariosData
        })
        
        })

    


export default usuariosRouter
//module.exports = usuariosRouter

