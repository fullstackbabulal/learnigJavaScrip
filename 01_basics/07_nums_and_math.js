/* Number Declaration and Number Object */
const score = 400; //score is a number variable assigned the value 400.

const balance = new Number(100); //balance is created as a Number object with the value 100

/* Number Methods */
console.log(balance.toString().length); // Output: Length of the string representation of `balance`.

console.log(balance.toFixed(1)); // Output: `balance` rounded to one decimal place.

console.log(otherNumber.toPrecision(4)); // Output: `otherNumber` with precision of 4.

console.log(hundreds.toLocaleString('en-IN')); // Output: `hundreds` formatted as a string with locale-specific thousands separator.

/* 
toString(): Converts a number to a string.

toFixed(digits): Formats a number using fixed-point notation with a specified number of digits after the decimal point.

toPrecision(precision): Formats a number to a specified precision in exponential or fixed-point notation.

toLocaleString(locale): Formats a number into a string using the specified locale-specific formatting.
*/

/* Math Object and Methods */
console.log(Math.random()); // Output: Random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log((Math.random()*10) + 1); // Output: Random number between 1 and 10.

console.log(Math.floor(Math.random()*10) + 1); // Output: Random integer between 1 and 10.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random integer between `min` and `max`.

/* 
Math: JavaScript object that allows access to mathematical constants and functions.

Various methods like abs(), round(), ceil(), floor(), min(), and max() perform mathematical operations.

Math.random(): Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

Math.floor(): Rounds a number down to the nearest integer.
*/