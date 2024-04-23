// While Loops

let i = 0;
while (i <= 10) { // While loop that continues as long as i is less than or equal to 10
  console.log(`Value of i is ${i}`); // Output the current value of i to the console
  i += 1; // Increment i by 1
}

let arr = [1, 5, 10, 15, 20]; // Define an array with values
let x = 0;
while (x < arr.length) { // While loop that continues as long as x is less than the length of the array
  console.log(`Value of i is ${arr[x]}`); // Output the current value of the array at index x to the console
  x += 1; // Increment x by 1
}

let myArr = [1, 5, 10, 15, 20]; // Define an array with values
let y = 0;
do {
  console.log(`Value of myArr is ${myArr[y]}`); // Output the current value of the array at index y to the console
  y += 1; // Increment y by 1
} while (y < myArr.length); // Do-while loop that continues as long as y is less than the length of the array

for (const indexd of myArr) { // For...of loop iterating over each element of myArr
  console.log(indexd); // Output each element of myArr to the console
}

let myName = 'Babulal Mandal'; // Define a string
for (const indexd of myName) { // For...of loop iterating over each character of myName
  if (indexd == ' ') { // Check if the current character is a space
    continue; // Skip to the next iteration if the character is a space
  }
  console.log(indexd); // Output the current character to the console
}
