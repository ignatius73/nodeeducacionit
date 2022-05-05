//Importaciones
import 'dotenv/config';
import path from 'path';
import express from 'express';
import cors from 'cors';
import usuariosRouter from './routes/users.js'
import { create } from 'express-handlebars';
import dbConnection from './database/db.js';


//Declaración de Objetos
const app = express();
const hbs = create();



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/****************************
 * 
 * MiddleWares 
 * 
 */
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

/***********************************
 * 
 * Routes as Middlewares
 */
app.use('/users', usuariosRouter )

app.get('/home', function (req, res) {
    res.render('home')

});



app.get('/signup', (req, res)=>{
   //res.sendFile(`${__dirname}/public/signup.html`);
   res.render('signUp',
   {
       title:'Sign Up',
       nombre: 'Gabriel'    

   })
});

async function connectDB(){
    try {
        await dbConnection();
        app.listen(process.env.PORT, ()=>{
            console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log(error);
    }
}

connectDB();