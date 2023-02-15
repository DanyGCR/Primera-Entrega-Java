let nombredeusuario = "Dani"
const anio = 2023;
// datos numericos = 12 13 14 15
//datos strings = textos y va en comillas "Dani" "Buenos Aires"

let numero1 = 100
let numero2 = 90

let multiplicacion = numero1 * numero2 //900
let resta = numero1 - numero2 //10

numero1 = 100

multiplicacion = multiplicacion * numero1

let nombreusuario = "Dani"
let apellidousuario = "Calderon"

let datosuser = nombredeusuario + apellidousuario //DaniCalderon
 
datosuser = nombredeusuario + " " + apellidousuario //Dani Calderon

let edad = prompt("Ingrese su edad") 

edad =Number(edad)

if(edad>18){
    alert("Puedes Ingresar al Sitio")
} else {
    alert("No Puedes Ingresar")
}
console.log ("ejemplo A:")
for( let i=0; i <10; i=i+1){
    console.log("hola mundo")
}
//Resta
console.log ("ejemplo B:")
for( let i=1; i<=10; i=i+1){
    console.log(i);
}

for(let i=10; i>=0; i=i-1) {

} 
//Numero Pares de 0 y 10
console.log("ejemplo D:");
for (let i=0; i<=10; i=i+2) {
    console.log (i)
}

function Impresion(){
    alert("Bienvenidos a Fuera de Juego");
}

Impresion();

//Funcion de Retorno

function retornarNum3(){
let numTres = retornarNum3();
console.log(numTres)
}
//Funcion que Suma 
function sumar(valorA,valorB){
let resultado = valorA + valorB;
return resultado;

}

let numeroUno=200;
let numeroDos=300;


function sumar (valorA,valorB){
    return valorA + valorB;
}
console.log(sumar(10,70))
//Ejemplo Variable Global
let global = 10;

function ejemploA(){
    console.log(global)
}

ejemploA();

//Ejemplo Variable Local o Locales
 
function ejemploB(){
    let resultadoejemploB = 10 + 10; 
    console.log(resultadoejemploB);
}

ejemploB();

//Funcion Anonima 

let sumaAnonima = function (a,b) {return a + b};
console.log(sumaAnonima(1000,1000));

let restaAnonima = function(a,b) {return a - b};
console.log (restaAnonima(1000, sumaAnonima(1000,2000)));

let division = (a,b) => { return a/b};
console.log ("Division con funcion flecha");
console.log(division (100,5));
//Return Implicito
let multiplicar = (a,b) => a * b
console.log(multiplicar(50,50));

//**Segunda Parte - Pre-Etrega - Calderon Daniel */

let alumnoDaniel = {
    nombre : "Daniel" ,
    apellido: "Calderon",
    edad: "25",
};

let perro = {
    nombre: "Sion",
    edad: "2",
    color: "negrito"
};

console.log(perro);

let auto = {
    marca: "Renault",
    modelo: "Clio Mio",
    fabricacion: "2017",
    precio: "5000000",
    km: "800000"
};
console.log(auto);
console.log (typeof auto);

const Gaseosas = {
    nombre : "Manaos",
    precio : "300",
    cantidad: "100"
};

console.log (Gaseosas)
//** Cambio de valor */
Gaseosas.precio=450;
console.log(Gaseosas);

function Clientes (nombre, apellido, edad) {
    this.nombre= nombre;
    this.apellido= apellido;
    this.edad= edad;

    //**Saludo */
    this.saludar=function(){
        console.log("Hola soy  " + this.nombre);
    }
}

const Cliente1 = new Clientes ("Ravi", "Marto", "25")
console.log (Cliente1);
const Cliente2 = new Clientes ("Brian", "Ravinochi", "23")
console.log (Cliente2);

//**Funciones */

let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");
let edad1 = prompt ("ingrese su edad");
console.log(Cliente1);
Cliente1.saludar();

class Producto {
    constructor (tipo, precio){
        this.tipo=tipo;
        this.precio=precio
    }

    sumaIva(){
        return this.precio *1.21;
    }
    
}
const pokemon = new Producto ("pokemon", 3500);
console.log ("El precio del pokemon es de: "+ pokemon.precio + "precio con Iva es: " + pokemon.sumaIva());

let frase = "Hola , soy un Ejemplo";
console.log(frase.toUpperCase());

let frasedos = "Hola, soy otro Ejemplo";
console.log(frasedos.toLowerCase());
//In - y For..IN

let Homero = {
    nombre : "Homero",
    apellido : "Simpson",
    profesion : "inspector de seguridad",
    edad :"39",
};

console.log("nombre" in Homero);

for (let propiedad in Homero){
    console.log(propiedad)
}

for (let propiedad in Homero){
    console.log(propiedad + " : " + Homero [ propiedad]);
}


let array = [1,2,3];
console.log(array);

let arrayVacio = [];
console.log("arrayvacio: ");
console.log(arrayVacio);

arrayVacio = [25,90,30];
console.log("Agregando cosas a mi array : ");
console.log(arrayVacio);

//** Metodo Push 2da Entrega */

let empresa = ["Juan", "Eduardo", "Martin", "Lucas"];
console.log(empresa);

console.log("agregar al nuevo socio : ");
empresa.push("Rodrigo");
console.log(empresa);

//**Metodo unshift 2da Entrega */
empresa.unshift("Marcos");
console.log(empresa);

//**Metodo pop 2da Entrega */

empresa.pop();
console.log("Sacamos al ultimo nuevo socio : ");

//**Metodo shift 2da Entrega */

let eliminadoShift = empresa.shift();
console.log(empresa);
console.log("Eliminamos al primer socio: " + eliminadoShift);

//** Funciones 2da Pre entrega */

class Productos {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }    
}

const filamento = new Productos ("Filamento", 3000);
const pintura = new Productos ("Pintura", 2600);
const plantilla = new Productos ("Plantilla", 1500);
const manoobra = new Productos ("ManoObra", 1000);

const arrayProductos = [filamento, pintura, plantilla, manoobra];
console.log(arrayProductos);

arrayProductos.forEach((Productos) =>{
    console.log(Productos);
})

arrayProductos.forEach(Productos=>console.log(Productos.precio));

const buscado = arrayProductos.find (producto=> producto.nombre === "Filamento");
console.log(buscado);

const arrayProductosMenos4000 = arrayProductos.filter(producto=> producto.precio < 4000);
console.log(arrayProductosMenos4000);

const arrayProductosConIva = arrayProductos.map((producto)=>{
    return {
        nombre: producto.nombre,
        precio: (producto.precio * 1.21)
    }
});
console.log(arrayProductosConIva);

let totalPrecio = arrayProductos.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
console.log(totalPrecio);

let pi = Math.PI;
console.log(pi);

console.log((pi).toFixed(4));

let minimo = Math.min (73,90,5,54);
console.log(minimo);

let maximo = Math.max(102,54,21,414,123,567);
console.log(maximo);

console.log(Math.ceil(1.6,1.7,1.8));

console.log(Math.floor(1.5,1.6,1.7));

console.log(Math.round(1.5,1.6,1.9));

console.log(Math.sqrt(81));

const hoy = new Date ("February 15,2021");

console.log( hoy.toDateString());
console.log( hoy.toLocaleString());
console.log( hoy.toLocaleDateString());
console.log( hoy.toTimeString());