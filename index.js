const express = require('express')
const cors = require('cors')
const usuariosRouter = require('./routes/users')





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
app.use('/api/v1/users', usuariosRouter )

app.get('/home', function (req, res) {
res.sendFile(`${__dirname}/public/home.html`);

});

app.get('/signup', (req, res)=>{
    res.sendFile(`${__dirname}/public/signup.html`);
});

app.listen(3000, ()=>{
    console.log('Escuchando peticiones en el puerto 3000');
})