/*
Las variables que se ocupan dentro de JS son 3 tipos

var -> de acuerdo a EJS6 esta siendo sustituida, pero es de uso mas comun  para determinar una variable de acceso publico

let -> es una variable protegida ya que solo funciona dentro de una funcion o declaracion de codigo

const -> la cual es un valor constante en todo el documento
*/

var x = "y";
let x_let = "x";
if(true){
    let x = "x";
    document.getElementById('resultado').innerHTML += x + '<br>';
}
document.getElementById('resultado').innerHTML += x + '<br>';


//funciones flecha es una funcion en js que a diferencia de una funcion normal no genera su propio contexto (this) necesita ser declara antes de ser usada y no necesita un return

//normal
function sumarFuncionNormal(n1, n2){
    return n1+n2;
}

document.getElementById('resultado').innerHTML += `vamos a sumar 3 y 5: ${sumarFuncionNormal(3,5)}<br>`;


/*
Una funcion flecha tiene la siguiente estructura:

"cadena" -> id, clase, name, atributo
*/

const sumaFuncionFlecha = (n1, n2) => n1+n2;

document.getElementById('resultado').innerHTML += `vamos a sumar 7 y 5: ${sumaFuncionFlecha(7,5)}<br>`;


const razasdePerro = [
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Belga",
    "Pitbull",
    "Dalmata",
    "San Bernardo"
];

//FIND nos permite buscar un elmento dentro del arreglo y si lo encuentra lo regresa y sino lanza un "undefinend"

if(razasdePerro.find((raza) => raza === "Pug")){
    document.getElementById('resultado').innerHTML += "La raza se encuentra en el arreglo<br>";
    document.getElementById('resultado').innerHTML += razasdePerro + '<br>';
}else{
    //hay que meterlo
    razasdePerro.push("Pug");
    document.getElementById('resultado').innerHTML += razasdePerro + '<br>';
}


//FINDINDEX

const indiceChihuahua = razasdePerro.findIndex((raza)=> raza === "Chihuahua");

if(indiceChihuahua > -1){
    document.getElementById('resultado').innerHTML += razasdePerro[indiceChihuahua] + '<br>';
    //aparte voy agregar que diga que la raza es pequeña
    razasdePerro[indiceChihuahua] += "(Raza de pequeña de perro)";
    document.getElementById('resultado').innerHTML += razasdePerro[indiceChihuahua] + '<br>';
    //diferencia sin el indice
    document.getElementById('resultado').innerHTML += razasdePerro + '<br>';
}else{
    document.getElementById('resultado').innerHTML += "No esta esa raza<br>";
}
