const myObject = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby", 
}

for (const key in myObject) {
  console.log(`${key} Full Form is ${myObject[key]}`);
}


const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

// Iterate over the keys of the object using for...in loop
for (let key in person) {
  console.log(key); // Output: firstName, lastName, age
}

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key); // Output: firstName, lastName, age
  }
}


const numbers = [1, 2, 3, 4, 5];

// Example 1: Doubling each number in the array
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Converting each number to a string
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers); // Output: ['1', '2', '3', '4', '5']


const ages = [25, 16, 30, 18, 21];

// Example 1: Filtering out ages greater than or equal to 18
const adults = ages.filter(age => (age >= 18));
console.log(adults); // Output: [25, 30, 18, 21]

// Example 2: Filtering out ages less than 21
const legalDrinkingAge = ages.filter(age => (age >= 21));
console.log(legalDrinkingAge); // Output: [25, 30, 21]
