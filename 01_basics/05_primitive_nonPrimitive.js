/* Primitive Data Type and Non Primitive Data Type */
// 7 types: String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue = 100.3; // Number
const isLoggedIn = false; // Boolean
const outSideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Symbol

console.log(id === anotherId); // false, because each Symbol value is unique

const bigNumber = 45186342481649468466458n; // BigInt

/* Reference (non primitive) */

// Array, Ojects, Functions

const heros = ['Shaktiman', 'naagraj', 'doga']; // Array

let myObj = {
  name: "Babulal",
  age: 27,
}; // Object

const myFunction = function() {
  console.log("Hello World");
}; // Function




console.log(typeof scoreValue); // "number"
console.log(typeof score); // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof outSideTemp); // "object" (although it's null, typeof null returns "object" which is a JavaScript quirk)
console.log(typeof userEmail); // "undefined"

// https://262.ecma-international.org/5.1/#sec-11.4.3
