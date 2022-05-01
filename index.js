//Importaciones
import path from 'path';
import express from 'express';
import cors from 'cors';
import usuariosRouter from './routes/users.js'
import { create } from 'express-handlebars';


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

app.listen(3000, ()=>{
    console.log('Escuchando peticiones en el puerto 3000');
})