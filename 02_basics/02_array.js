const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Adding dc_heros array as a single element to marvel_heros array
 marvel_heros.push(dc_heros)

// Logging marvel_heros to console
 console.log(marvel_heros);

// Accessing the second character of the fourth element of marvel_heros array
 console.log(marvel_heros[3][1]);

// Combining marvel_heros and dc_heros arrays using concat method
 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);

// Creating a new array (all_new_heros) by spreading elements of marvel_heros and dc_heros arrays
const all_new_heros = [...marvel_heros, ...dc_heros]

// Logging all_new_heros to console
 console.log(all_new_heros);

// Creating an array with nested arrays and flatting it recursively
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Checking if a string is an array
console.log(Array.isArray("Hitesh"))

// Converting a string to an array of characters
console.log(Array.from("Hitesh"))

// Converting an object to an array
console.log(Array.from({name: "hitesh"})) // interesting

// Creating an array using Array.of method
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
