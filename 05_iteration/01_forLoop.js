// For Loops
for (let index = 0; index < 10; index++) { // Initialize index to 0; loop until index is less than 10; increment index by 1 each iteration
  const element = index; // Assign the current value of index to the constant variable element
  console.log(element); // Output the value of element to the console
}

// nested for loop

const array=[1,2,3,4,5,6,7,8,9,10]; // Define an array with values from 1 to 10

for (let i = 0; i < array.length; i++) { // Initialize i to 0; loop until i is less than the length of the array; increment i by 1 each iteration
  const element = array[i]; // Assign the current value of the array at index i to the constant variable element
  console.log(`This is the outer loop value ${element}`); // Output the value of element preceded by a descriptive string to the console
  for (let j = 0; j < array.length; j++) { // Initialize j to 0; loop until j is less than the length of the array; increment j by 1 each iteration
    const element = array[j]; // Assign the current value of the array at index j to the constant variable element
    console.log(`This is the Inner Loop Value ${element}`); // Output the value of element preceded by a descriptive string to the console
  }
}

for (let score = 0; score < 10; score++) { // Initialize score to 0; loop until score is less than 10; increment score by 1 each iteration
  if (score == 5) { // Check if score is equal to 5
    console.log(`Detected ${score}`); // Output a message indicating that score is detected
    break; // Exit the loop
  }
  console.log(`Value of Score is ${score}`); // Output the value of score to the console
}

for (let score = 0; score < 10; score++) { // Initialize score to 0; loop until score is less than 10; increment score by 1 each iteration
  if (score == 5) { // Check if score is equal to 5
    console.log(`Detected ${score}`); // Output a message indicating that score is detected
    continue; // Skip the current iteration and proceed to the next iteration
  }
  console.log(`Value of Score is ${score}`); // Output the value of score to the console
}
