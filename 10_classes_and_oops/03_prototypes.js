// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// Extending Object prototype
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
};

// Extending Array prototype
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
};

// Calling the custom methods added to prototypes
myHeros.hitesh(); // Outputs: Hitesh is present in all objects
myHeros.heyHitesh(); // Outputs: Hitesh says hello
heroPower.getSpiderPower(); // Outputs: Spidy power is sling

// Object inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

// Using prototype chaining to set up inheritance
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Setting TeachingSupport as the prototype of TASupport
};

// Setting up inheritance using modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// Adding a custom method to the String prototype
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

// Testing the custom method added to the String prototype
let anotherUsername = "ChaiAurCode     ";
anotherUsername.trueLength(); // Outputs: True length is: 11
"hitesh".trueLength(); // Outputs: True length is: 6
"iceTea".trueLength(); // Outputs: True length is: 6
