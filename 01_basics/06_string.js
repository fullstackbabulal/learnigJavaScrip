/* String Declaration and Template Literal */

const name = "hitesh";

const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

/*name and repoCount are declared as string and number variables respectively.*/

/*The console.log() statement uses template literals to embed the variables name and repoCount within a string for output.*/

/* String Object Creation */

const gameName = new String('hitesh-hc-com'); // Creates a string object gameName using the String constructor.

/* String Methods */

console.log(gameName.charAt(2)); // Output: 't'

console.log(gameName.indexOf('t')); // Output: 2

console.log(gameName.substring(0, 4)); // Output: 'hite'

console.log(gameName.slice(-8, 4)); // Output: ''

console.log(newStringOne.trim()); // Output: 'hitesh'

console.log(url.replace('%20', '-')); // Output: 'https://hitesh.com/hitesh-choudhary'

console.log(url.includes('sundar')); // Output: false

console.log(gameName.split('-')); // Output: ['hitesh', 'hc', 'com']

//charAt(index): Returns the character at the specified index.

//indexOf(substring): Returns the index of the first occurrence of the specified substring.

//substring(startIndex, endIndex): Returns a part of the string between the specified indexes.

//slice(startIndex, endIndex): Returns a section of the string between the start and end indexes.

//trim(): Removes whitespace from both ends of a string.

//replace(oldValue, newValue): Replaces occurrences of a specified substring with another substring.

//includes(substring): Checks if a string contains a specified substring.

//split(separator): Splits a string into an array of substrings based on a specified separator.