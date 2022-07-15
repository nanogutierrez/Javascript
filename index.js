class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }
}

let productos = [];

productos.push(new Producto("lemonpie", 1100));
productos.push(new Producto("marquise", 1300));
productos.push(new Producto("cheese cake", 1500));
productos.push(new Producto("mousse de chocolate", 1700));

for(const tortas of productos){
    if(tortas.nombre === "marquise"){
        tortas.vender()
    }
}

console.log(productos);


function operaciones(operacion){
    if(operacion === "suma"){
        return (x,y) => x + y;
    }
}

let suma = operaciones("suma");
console.log(suma(1100,1500));



for (let i = 1; i <= 10; i++){
    let nombre = prompt("ingrese su nombre y apellido").toUpperCase();
    let mensaje = `Ticket de compra n: ${i} Nombre: ${nombre}`;
    alert(mensaje);
    switch (i){
          case 3:
                console.log("tenes un 20% de descuento en tu ticket de compra");
                break;
          case 7:
                console.log("tenes un 20% de descuento en tu ticket de compra");
                break;
          default:
                console.log("no tenes descuento en tu ticket de compra pero quizas lo obtengas en tu proxima compra");
                break;
    }
}





//comentario de linea

/*
comand  shift A (tira todos los comentarios)
*/

//formas de declarar una variable recomendada
/*let nombre = "Mariana"; //declaracion de una variable.
const edad = 15; //declaracion de una constante (algo que va a estar fijo, que nunca va a cambiar). los numeros van sin comilla.

//no recomendada 
var apellidos = "Gomez"; //declaracion de una variable no recomendable.

console.log(nombre); */

/*let numeroUno = 10;
let numeroDos = 11;
let resultado = numeroUno + numeroDos;
const PRINCIPAL = 5; 

console.log(resultado*/

/*let nombre = prompt("ingrese el nombre");
console.log(nombre);*/


/*  let nombre = "camila";

if(nombre === "camila"){
    console.log("saludo");
}else{
    console.log("no saludo")
} */

/*  let edad = 19;

if(edad < 15){
    console.log("necesitas un adulto responsable");
}else if(edad < 18){
    console.log("entras con un amigo");
}else if(edad === 18){
    console.log("puedes entrar solo");
}else{
    console.log("no puedes entrar");
/*  */

/*  let edad = 18;
let permiso = edad > 18;

if(permiso){
    console.log("puedes entrar");
}else{
    console.log("no puedes entrar");
}*/

/*  if("0"){
    console.log("hola")
}*/

// let nombre = "andres";

// if(nombre != "andres"){
//     console.log("no es andres");
// }






