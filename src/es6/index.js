function newFunction(name, age, country)
{
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'EC';
    console.log(name, age, country);
}
// ES6
function newFunction2(name = 'oscar', age = 32, country = 'EC')
{
    console.log(name, age, country);
}
newFunction();
newFunction2();

let hello = "hello";
let world = "world";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Nulla maiores ullam deserunt dignissimos illum eos culpa. 
Magnam nemo pariatur, aliquam illo ut quod blanditiis neque. 
Incidunt assumenda esse tempore facilis.`;

console.log(lorem);

let person = {
    name: 'Cristian',
    age: 26,
    country: 'EC'
};
const { name, age, country } = person;
console.log(name, age, country);

let team1 = ['oscar', 'julian'];
let team2 = ['valeria', 'jessica'];
let education = ['david', ...team1, ...team2];
console.log(education);

{
    var globalVar = "global var";
}
{
    // el LET está en otro scope o contexto
    let globalLet = "global let";
}
console.log(globalVar);

let nombre = 'oscar';
let edad = 32;
obj = { name: nombre, age: edad };
obj2 = { nombre, edad };
console.log(obj);
// {nombre: 'oscar', edad: 32}
console.log(obj2);

const names = [
    {name: 'cristian', age: 26},
    {name: 'jessica', age: 27}
];
let listOfNames = names.map(function (item) {
    console.log(item.name);
});
// ES6
let listOfNames2 = names.map(item => {
    console.log(item.name);
});
let listOfNames3 = names.map(({name, age}) => {
    console.log(name, age);
});

const square = num => num * num;
console.log(square(3));

// ES6
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2, 2));

//import {hello} from "./module";
//hello();
// Generadores: funcion especial que retorna una serie de valores según el
// algoritmo definido
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World!';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value == null);
console.log(generatorHello.next().value);

