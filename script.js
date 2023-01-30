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