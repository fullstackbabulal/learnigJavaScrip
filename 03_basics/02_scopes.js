//var c = 300
let a = 300; // Declares a variable 'a' with value 300 in the global scope.

if (true) {
    let a = 10; // Declares a new variable 'a' with value 10 in the block scope.
    const b = 20; // Declares a constant 'b' with value 20 in the block scope.
    // console.log("INNER: ", a); - This line is commented out.
}

// console.log(a); // Outputs: 300, as it accesses the 'a' variable in the global scope.
// console.log(b); // This line would cause an error because 'b' is not accessible outside of its block scope.
// console.log(c); // This line would cause an error because 'c' is not declared.

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username); // Outputs: hitesh
    }
    // console.log(website); // This line would cause an error because 'website' is not accessible outside of its function scope.

     two(); // Calls the 'two' function.
}

// one(); // This function call is commented out.

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website); // Outputs: hitesh youtube
    }
    // console.log(website); // This line would cause an error because 'website' is not accessible outside of its block scope.
}

// console.log(username); // This line would cause an error because 'username' is not accessible outside of its block scope.


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)); // Outputs: 6, as it calls the 'addone' function.

function addone(num){
    return num + 1; // Adds 1 to the input number and returns the result.
}

addTwo(5); // This line would cause an error because 'addTwo' is not a function yet.
const addTwo = function(num){
    return num + 2; // Adds 2 to the input number and returns the result.
};
