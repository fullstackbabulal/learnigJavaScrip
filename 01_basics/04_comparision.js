/* Comparisons with Numbers */
console.log(2 > 1);  // Output: true, because 2 is greater than 1

console.log(2 >= 1); // Output: true, because 2 is greater than or equal to 1

console.log(2 < 1);  // Output: false, because 2 is not less than 1

console.log(2 == 1); // Output: false, because 2 is not equal to 1

console.log(2 != 1); // Output: true, because 2 is not equal to 1

/* Comparisons with Strings */
console.log("2" > 1);  // Output: true, because "2" is converted to a number and compared

console.log("02" > 1); // Output: false, because "02" is also converted to a number and compared

/* Comparisons with Null and Undefined */
console.log(null > 0);  // Output: false, because null is treated as 0 in numeric comparisons

console.log(null == 0); // Output: false, because null is only equal to undefined

console.log(null >= 0); // Output: true, because null is treated as 0 in numeric comparisons

console.log(undefined == 0); // Output: false, because undefined is not equal to any value

console.log(undefined > 0);  // Output: false, because undefined is treated as NaN (Not a Number) in numeric comparisons

console.log(undefined < 0);  // Output: false, because undefined is treated as NaN (Not a Number) in numeric comparisons

/* Strict Comparison (===) */
console.log("2" === 2); // Output: false, because "2" is a string and 2 is a number, also their types differ

