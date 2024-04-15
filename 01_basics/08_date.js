// Creating a Date object representing the current date and time
let myDate = new Date()

// Creating a Date object representing a specific date (January 14, 2023)
// Note: Date format is Month-Day-Year
let myCreatedDate = new Date("01-14-2023")

// Retrieving the current timestamp (milliseconds since January 1, 1970)
let myTimeStamp = Date.now()

// Creating another Date object representing the current date and time
let newDate = new Date()

// Logging the newDate object to console
console.log(newDate);

// Getting the month component of newDate and adding 1 (since months are zero-indexed)
console.log(newDate.getMonth() + 1);

// Getting the day of the week component of newDate
console.log(newDate.getDay());

// Formatting newDate into a string representing the full name of the weekday
newDate.toLocaleString('default', {
    weekday: "long",   
})

