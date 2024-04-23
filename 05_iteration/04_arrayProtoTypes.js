// Array.prototype.push()
// Adds one or more elements to the end of an array and returns the new length of the array.
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

// Array.prototype.pop()
// Removes the last element from an array and returns that element.
const poppedElement = arr.pop();
console.log(poppedElement); // Output: 4
console.log(arr); // Output: [1, 2, 3]

// Array.prototype.unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3]

// Array.prototype.shift()
// Removes the first element from an array and returns that element.
const shiftedElement = arr.shift();
console.log(shiftedElement); // Output: 0
console.log(arr); // Output: [1, 2, 3]

// Array.prototype.concat()
// Returns a new array combining the contents of the array on which it is called, and the contents of the arrays or values provided as arguments.
const arr2 = [4, 5];
const combinedArray = arr.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5]

// Array.prototype.slice()
// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
const slicedArray = combinedArray.slice(1, 3);
console.log(slicedArray); // Output: [2, 3]

// Array.prototype.splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const removedElements = combinedArray.splice(1, 2, 6, 7);
console.log(removedElements); // Output: [2, 3]
console.log(combinedArray); // Output: [1, 6, 7, 4, 5]

// Array.prototype.forEach()
// Executes a provided function once for each array element.
combinedArray.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

// Array.prototype.map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
const mappedArray = combinedArray.map(element => element * 2);
console.log(mappedArray); // Output: [2, 12, 14, 8, 10]

// Array.prototype.filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
const filteredArray = combinedArray.filter(element => element % 2 === 0);
console.log(filteredArray); // Output: [6, 4]

// Array.prototype.reduce()
// Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const sum = combinedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 23
