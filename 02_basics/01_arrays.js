// array

// Creating an array with elements 0, 1, 2, 3, 4, 5
const myArr = [0, 1, 2, 3, 4, 5]

// Creating an array with string elements "shaktiman" and "naagraj"
const myHeroes = ["shaktiman", "naagraj"]

// Creating an array with elements 1, 2, 3, 4
const myArr2 = new Array(1, 2, 3, 4)

// Accessing the element at index 1 of myArr
// console.log(myArr[1]);

// Array methods

// Adding elements 6 and 7 to the end of myArr
// myArr.push(6)
// myArr.push(7)

// Removing the last element from myArr
// myArr.pop()

// Adding element 9 to the beginning of myArr
// myArr.unshift(9)

// Removing the first element from myArr
// myArr.shift()

// Checking if myArr includes the element 9
// console.log(myArr.includes(9));

// Finding the index of the element 3 in myArr
// console.log(myArr.indexOf(3));

// Joining all elements of myArr into a single string
// const newArr = myArr.join()

// Logging myArr and newArr to console
// console.log(myArr);
// console.log( newArr);

// slice, splice

// Logging myArr to console
console.log("A ", myArr);

// Creating a new array (myn1) by extracting elements from index 1 (inclusive) to 3 (exclusive) of myArr
const myn1 = myArr.slice(1, 3)

// Logging myn1 and myArr to console
console.log(myn1);
console.log("B ", myArr);

// Creating a new array (myn2) by removing 3 elements starting from index 1 of myArr
const myn2 = myArr.splice(1, 3)

// Logging myArr and myn2 to console
console.log("C ", myArr);
console.log(myn2);
