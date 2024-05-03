// Get the property descriptor of Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// Output the property descriptor of Math.PI
// console.log(descriptor);

// Output the value of Math.PI
// console.log(Math.PI);

// Try to modify Math.PI (This will not work as Math.PI is read-only)
// Math.PI = 5;

// Output the value of Math.PI after the attempt to modify it
// console.log(Math.PI);

// Create an object named chai with properties and methods
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai not made yet.");
    }
};

// Get the property descriptor of the 'name' property in the chai object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Redefine the 'name' property of the chai object to make it enumerable
Object.defineProperty(chai, 'name', {
    // writable: false, // Uncomment this line if you want to make the 'name' property read-only
    enumerable: true,
});

// Output the updated property descriptor of the 'name' property in the chai object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Iterate over the properties of the chai object
for (let [key, value] of Object.entries(chai)) {
    // Check if the value is not a function
    if (typeof value !== 'function') {
        // Output the key-value pair
        console.log(`${key} : ${value}`);
    }
}
