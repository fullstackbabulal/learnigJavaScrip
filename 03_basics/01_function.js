function sayMyName(){
    console.log("H"); // Outputs: H
    console.log("I"); // Outputs: I
    console.log("T"); // Outputs: T
    console.log("E"); // Outputs: E
    console.log("S"); // Outputs: S
    console.log("H"); // Outputs: H
}

// sayMyName() - This function call is commented out, so it won't execute.

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2 // This line is commented out. This variable declaration isn't used.
    // return result // This line is commented out.
    return number1 + number2; // Returns the sum of number1 and number2.
}

const result = addTwoNumbers(3, 5); // Calls the addTwoNumbers function with arguments 3 and 5, storing the result in 'result'.

// console.log("Result: ", result); - This console.log statement is commented out.

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username"); // Outputs a message if username is falsy.
        return; // Exits the function early if username is falsy.
    }
    return `${username} just logged in`; // Returns a string indicating the username logged in.
}

// console.log(loginUserMessage("hitesh")) - This function call is commented out.
// console.log(loginUserMessage("hitesh")) - This function call is commented out.

function calculateCartPrice(val1, val2, ...num1){
    return num1; // Returns an array containing the rest of the arguments passed to the function.
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) - This function call is commented out.

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Outputs the username and price of the passed object.
}

// handleObject(user) - This function call is commented out.
handleObject({
    username: "sam",
    price: 399
}); // Calls handleObject with a specific object as an argument.

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]; // Returns the second element of the array passed to it.
}

// console.log(returnSecondValue(myNewArray)); - This function call is commented out.
console.log(returnSecondValue([200, 400, 500, 1000])); // Outputs the second element of the given array.
