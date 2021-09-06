
/* function suma(a:number, b:number) {

    return a + b;
}

alert(suma(20,20)); */

// TypeScript por Roberth Arieta

// Boolean

let muted: boolean = true;
muted = false;

// Numeros

let numerador : number = 100;
let denominador: number = 2;
let resultado = numerador/ denominador;

console.log(resultado);


// String

let nombre: String = "Roberth";
let apellido : String = "Arrieta";
let saludo = `Mellamo: ${nombre} ${apellido}`;

console.log(saludo);

// Arreglos

let people: String[] = [];
people = ["Jose", "Fernan", "Julian"];
people.push("josue");
console.log(people);

// Arreglos de Strings and numbers:

let peopleAndNumbers: Array <string | number> = [];
peopleAndNumbers.push("Roberth", 22);
console.log(peopleAndNumbers);

//Emun

enum color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: color = color.Azul;
console.log( `My Color Favorito es: ${colorFavorito}`);

//Any

let comodin: any = "Joker"
comodin = {type: "richart"}
comodin = 12;
console.log(comodin);


// Object

let someObject: Object = {type: "richart"};
console.log(someObject);

// funciones

function suma(a:number, b:number): number {

    return a + b;
}

const resultadoSuma = suma(40, 10);

console.log(resultadoSuma);

function creadorSuma (a:number): (b:number) => number {

    return function(b:number) {
        return a + b;
    }
}

const addFour = creadorSuma(90);
const fourPlus6 = addFour(10);

console.log(fourPlus6);

function fullName (firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const roberth = fullName("Roberth");

console.log(roberth)

function fullValue (firstName: string = "jose", lastName: string = "amell"){
    return `${firstName} ${lastName}`
}

const person = fullValue();
console.log(person)


// Interfaces

interface Rectangulo {
    ancho:number;
    alto: number;
    color ?: color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    //color: color.Azul
}

function area(r: Rectangulo): number {

    return r.alto * r.ancho;
}

const areaRectangulo = area(rect);
console.log(areaRectangulo);

rect.toString = function () {
    return this.color ? `Un rectangulo : ${this.color}` : `Un rectangulo`
}
console.log(rect.toString())


