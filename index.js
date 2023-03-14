let nombre = { type: String, nombre: "Maximiliano Andres"};
let apellido = { type: String, apellido: "Chamena"};
let platziUser = { type: String, username: "Sebach13"};
let edad = { type: String, edad: "20"};
let email = { type:String, email: "maxichamena@gmail.com"};
let mayor = { type:Boolean, mayor: true};
let dinero = { type: Number, dinero: 2000};
let deudas = { type: Number, deudas: 700};
const nombreCompleto = nombre.nombre + apellido.apellido;
const nickname = "MaxiChame"
// console.log(nombre, apellido, platziUser, edad, email, mayor, dinero, deudas)
// console.log( "Mi nombre completo es: " + nombre.nombre + " " + apellido.apellido);
// console.log("Este es mi monto libre de deudas", dinero.dinero - deudas.deudas);




// function presentacion(nombreCompleto, nickname) {
// let presentation = "Mi nombre es: " + nombreCompleto + ", pero prefiero que me digas " + nickname + ".";
//     return document.body.innerHTML = presentation;
// }

// presentacion();

const tipoDeSucripcion = "Basic";

if (tipoDeSucripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if ( tipoDeSucripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSucripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

if (tipoDeSucripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} if ( tipoDeSucripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} if (tipoDeSucripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if (tipoDeSucripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
};

const tiposDeSucripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"

};

let fun = function (suscripcion) {
    if (tiposDeSucripciones[suscripcion]) {
        console.log(tiposDeSucripciones[suscripcion])
        return;
    }
    console.warn("Este tipo de suscripcion no existe");
}
fun("basic");

let i = 0;
while (i <= 5) {
    console.log ("El valor de I es: " + i)
    i++;
};

let j = 10;
while (j >= 2) {
    console.log ("El valor de J es: " + j)
    j--;
};
// Un solo condicional
// let respuesta;
// while (respuesta != "4") {
//     let pregunta = prompt("Cuanto es 2 + 2 ?")
//     respuesta = pregunta;
// }

// let maths = function() {
//     let matematica = prompt("Cuanto es 2 + 2 ?");
//     if (matematica == "4") {
//         alert("Bien");
//     } else {
//         maths();
//     };
// }
// maths();

let cualquierArray = function (array) {
    for(let i = 0; i < array.length-1; i++) {
    let casiTodo = array[i];
    console.log(casiTodo)
    }

    let ultimo = array[array.length-1];
    console.log(ultimo)
}
let e = [424,2,3,4,45,56,6,5,3,23,4]
let ola = ["olasdas","a", "b", "c","d"];

cualquierArray(ola);

let cualquierArray2 = function (array) {
    for(let key in array) {
        console.log(array[key]);
    }
}
cualquierArray2(e);

let cualquierObjecto = function (obj) {
    for( let key in obj)
    console.log(obj[key]);
}

let Maxi = {
    name: "maxito",
    apodo: "chame",
    edad: "23",
    deporte: "voley",
};

let Nico = {
    name: "Nicolas",
    apodo: "Niky",
    edad: "28",
    deporte: "gym y birra",
};

cualquierObjecto(Nico)