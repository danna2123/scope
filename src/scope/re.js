// var (se puede reasignar y redeclarar)
var firstName; // undefined
firstName = 'oscar';
console.log(firstName);

var lastName = "david"; // declarar / asignar
lastName = 'ana'; // reasignar
console.log(lastName);

var seconName = 'david'; //declarando / asignando
var seconName = 'ana'; // reasignado
console.log(seconName);

// let (se puede reasignar los valores pero no se puede redeclarar)
let fruit = 'apple'; // declarar y asignar
fruit = 'Kiwi';

let fruit = 'banana';

// const (no se puede reasignar ni redeclara)
const animal = 'dog'; // declarar y asigar 
animal = 'cat'; // redeclarar

const vehicles = [];
vehicles.push("hola");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);