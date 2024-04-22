const userEmail = []

// Here, an empty array `userEmail` is declared. When `userEmail` is evaluated in a boolean context, it will be falsy because it's an empty array.
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

// Here, `emptyObj` is an empty object. When `Object.keys(emptyObj)` is evaluated, it returns an array of the object's own enumerable property names. Since the object is empty, the array will have a length of 0, making the condition true.
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// The nullish coalescing operator (??) returns the right-hand operand if the left-hand operand is null or undefined. Here, val1 will be assigned the first non-null and non-undefined value encountered, which is 10.
console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
// If the price of ice tea is less than or equal to 80, it logs "less than 80", otherwise, it logs "more than 80".
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
