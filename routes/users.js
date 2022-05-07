import Router from 'express';
import bcryptjs from 'bcryptjs';

import { Usuarios } from '../usuarios.js';
import Usuario from '../models/usuario.js';




const usuariosRouter = Router();

const usuariosClass = new Usuarios();


/* let usuariosData = [];
//Middleware personalizado
async function loadUsers(req, res, next){
    const users = await usuariosClass.loadUsers()
    if(users) usuariosData = users

    next();
} */ 

/* usuariosRouter.use(loadUsers) */

usuariosRouter.route('/api/v1')
    .get(async(req,res)=>{
        let { from=0, limit } = req.query;
        try {


            const users = await Usuario.find()
                .skip(Number(from))
                .limit(Number(limit))
                                
            const total = await Usuario.countDocuments();

            const usuarios = {
                total,
                users
            };
            
            res.json(usuarios);
            
        } catch (error) {
            res.status(500).json({msg:'Ocurrió un error', error});
        }
        
    })
    .post(async(req, res)=>{
 
        let { first_name, last_name, age, avatar, user, password }= req.body
       
        const salt = bcryptjs.genSaltSync(15)
        password = bcryptjs.hashSync(password,salt)
        
        /* const passValid = bcryptjs.compareSync(password) */
        const userToSave = new Usuario({first_name, last_name,age, avatar, user, password})
      
        try {
            const resp = await userToSave.save()
            res.status(201).json(resp);
            
        } catch (error) {
            res.status(400).json({ msg:'Faltan datos', error})
        }
        
    })


 
    usuariosRouter.put('/api/v1/:id', async(req,res)=>{
            const id = req.params.id;
            const { password, user, ...usuario } = req.body;

            try {
                const updatedUser = await Usuario.findByIdAndUpdate( id, usuario, { new: true } )
                res.status(200).json(updatedUser)
            } catch (error) {
                res.status(500).json({msg:'Ocurrió un error', error});
            }
    })

    usuariosRouter.delete('/api/v1/:id', async(req,res)=>{
                const id = req.params.id;
                    
                try {
                    const deletedUser = await Usuario.findByIdAndDelete(id)
                    res.status(200).json(deletedUser)
                } catch (error) {
                    res.status(500).json({msg:'Ocurrió un error', error});
                }
    

    })

    usuariosRouter.post('/usuarios', async(req,res)=>{
     
        const { password, user, id } =req.body
            

        try {
            const obtenerUsuario = await Usuario.findById(id)
            const passValid = bcryptjs.compareSync(password,obtenerUsuario.password )
            
            if(!passValid) return res.status(400).json({msg: 'Usuario / Contraseña incorrectos'})
            res.status(200).json({msg:"Bienvenido"});
        } catch (error) {
            res.status(500).json({msg:'Ocurrió un error', error});
        }


})

    


export default usuariosRouter
//module.exports = usuariosRouter

