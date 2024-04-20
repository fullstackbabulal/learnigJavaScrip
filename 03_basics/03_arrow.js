const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // Outputs a welcome message using the username property of the user object.
        console.log(this); // Outputs the user object itself.
    }

}

// user.welcomeMessage() // Calls the welcomeMessage method of the user object.

// user.username = "sam" // Changes the username property of the user object to "sam".
// user.welcomeMessage() // Calls the welcomeMessage method of the user object again.

// console.log(this); // This line would cause an error because 'this' is not defined in this context.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() // This function call is commented out.

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // Outputs: the global object, as arrow functions do not have their own 'this' binding.
}


// chai() // Calls the chai function.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // Returns an object with a 'username' property set to "hitesh".

console.log(addTwo(3, 4)); // Outputs: { username: "hitesh" }


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() // This line would cause an error because the forEach method expects a function argument.
