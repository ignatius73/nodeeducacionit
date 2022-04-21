/* 
var nombre = 'Sofía';

console.log(nombre);
var nombre = 'Gabriel';


console.log(nombre);

function nombrar(){
    nombre= 'Gabo';

}

nombrar()
console.log(nombre); */

//constructor let

/* let nombre = 'Gabriel'

function renombrar(){
    let nombre = 'Gabriela'
    console.log(nombre);

}

renombrar()
console.log(nombre);
 */

/************
 * 
 * CONST constructor de Constantes
 */


/* 
const nombre = true;

nombre = false;

console.log(nombre);

const usuario = {
    name: 'Gabriel',
    id: 1
}

console.log(usuario); 

usuario.name = 'Sofía';

console.log(usuario);*/


/* function renombrar(param1, param2, param3){
    console.log('Hola mundo');
}  */

/* const renombrar = ()=>{
    console.log('Hola mundo');
}

(()=>{
 console.log('Hola mundo auto invoked');   
})()


renombrar() */

/* animales = ['perro', 'gato', 'canario'];

let perro = 'perro'
const animal = animales.filter( e =>  e == perro )



//Condicional ternario
const isLogged = ()=> (animal) ? true : false
  




console.log(isLogged()); */

/* class Hero {
    
    constructor(name, alterEgo){
        this.name = name;
        this.alterEgo = alterEgo
    } 

    saludar(){
        console.log('Hola amiguitos');
    }


}

const batman = new Hero('Batman', 'Bruce Wayne')

console.log(batman);

batman.saludar(); */

/**********
 * Spread
 */
/* 
const numeros = [1,2,3]

const numerosTotal = [...numeros, 4, 5, 6]

console.log(numerosTotal);

const obj1 = {
    a1: 'Hola',
    a2: 'Mundo'
}

const obj2 = {
    ...obj1,
    a1: 'Otro',
    
   
}

console.log(obj2);

/*************
 * REST operator
 * 
 */

/* const potencia = (potencia, ...valores)=>{

    return valores.map( e=>{
        console.log(e);
    })
}



potencia(2,3,4,5,6) */


 










