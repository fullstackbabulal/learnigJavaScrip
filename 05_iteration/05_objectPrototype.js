// Define a constructor function for creating Person objects
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Create an instance of the Person object
const john = new Person('John', 'Doe');

// Accessing properties directly from the instance
console.log(john.firstName); // Output: John

// Accessing properties via prototype chain
console.log(john.toString()); // Output: [object Object]

// Explanation:
// When you access a property or method on an object, JavaScript first looks for that property or method directly on the object.
// If it doesn't find it, JavaScript then looks for it on the object's prototype, and if it still doesn't find it, it continues up the prototype chain until it reaches the top-level Object prototype.

// Object prototype
console.log(Object.prototype); // Output: {constructor: ƒ, toString: ƒ, hasOwnProperty: ƒ, ...}

// Explanation:
// The Object.prototype is the top-level prototype object in JavaScript.
// It contains common properties and methods that are inherited by all objects in JavaScript, including constructor, toString, hasOwnProperty, etc.

// Checking object's prototype
console.log(Object.getPrototypeOf(john) === Person.prototype); // Output: true

// Explanation:
// The prototype property of a constructor function points to the prototype object of instances created by that constructor function.
// In this case, Person.prototype is the prototype object associated with instances of the Person object.

// Adding a method to the prototype object
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Accessing the newly added method via prototype chain
console.log(john.getFullName()); // Output: John Doe

// Explanation:
// By adding a method to the prototype object, all instances of the Person object inherit that method.
// This allows you to share methods among all instances of the same object type, reducing memory consumption and improving performance.

// constructor
// The constructor property returns a reference to the constructor function that created an instance of an object.
console.log({}.constructor); // Output: ƒ Object()

// hasOwnProperty
// The hasOwnProperty method returns a boolean indicating whether the object has the specified property as its own property (not inherited from the prototype chain).
console.log({}.hasOwnProperty('toString')); // Output: false

// isPrototypeOf
// The isPrototypeOf method checks if an object exists in another object's prototype chain.
console.log(Object.prototype.isPrototypeOf({})); // Output: true

// propertyIsEnumerable
// The propertyIsEnumerable method returns a boolean indicating whether the specified property is enumerable (can be iterated over) in the object.
console.log({}.propertyIsEnumerable('toString')); // Output: false

// toLocaleString
// The toLocaleString method returns a string representing the object. This method is intended to be overridden by derived objects for locale-specific purposes.
console.log({}.toLocaleString()); // Output: [object Object]

// toString
// The toString method returns a string representing the object.
console.log({}.toString()); // Output: [object Object]

// valueOf
// The valueOf method returns the primitive value of the specified object.
console.log({}.valueOf()); // Output: {}

// __defineGetter__
// The __defineGetter__ method binds an object's property to a function to be called when that property is looked up.
const obj = {};
obj.__defineGetter__('customProperty', function() {
  return 'Custom Value';
});
console.log(obj.customProperty); // Output: Custom Value

// __defineSetter__
// The __defineSetter__ method binds an object's property to a function to be called when an assignment is made to that property.
obj.__defineSetter__('anotherProperty', function(value) {
  console.log(`Setting anotherProperty to ${value}`);
});
obj.anotherProperty = 'New Value'; // Output: Setting anotherProperty to New Value

// __lookupGetter__
// The __lookupGetter__ method returns the function associated with the specified getter property.
console.log(obj.__lookupGetter__('customProperty')); // Output: ƒ ()

// __lookupSetter__
// The __lookupSetter__ method returns the function associated with the specified setter property.
console.log(obj.__lookupSetter__('anotherProperty')); // Output: ƒ ()

// __proto__
// The __proto__ property is used for getting or setting the prototype of an object. It is deprecated and should be avoided in favor of Object.getPrototypeOf and Object.setPrototypeOf methods.
console.log(obj.__proto__); // Output: {}
