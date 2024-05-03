// Define a function named 'multipleBy5' that multiplies a number by 5
function multipleBy5(num){
  return num * 5;
}

// Add a property 'power' to the function object 'multipleBy5'
multipleBy5.power = 2;

// Call the 'multipleBy5' function with argument 5 and output the result
console.log(multipleBy5(5)); // Output: 25

// Output the value of the 'power' property of the 'multipleBy5' function object
console.log(multipleBy5.power); // Output: 2

// Output the 'prototype' property of the 'multipleBy5' function object
console.log(multipleBy5.prototype); // Output: undefined

// Define a constructor function 'createUser' to create user objects with 'username' and 'score' properties
function createUser(username, score){
  this.username = username;
  this.score = score;
}

// Add methods to the prototype of the 'createUser' constructor function
createUser.prototype.increment = function(){
  this.score++;
};
createUser.prototype.printMe = function(){
  console.log(`Score is ${this.score}`);
};

// Create new user objects 'chai' and 'tea' using the 'createUser' constructor
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

// Call the 'printMe' method of the 'chai' object
chai.printMe(); // Output: Score is 25

/*
Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3. The constructor is called: The constructor function is called with the specified arguments and 'this' is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
