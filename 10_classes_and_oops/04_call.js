function SetUsername(username){
  // This function is responsible for setting the username.
  // It may involve complex database calls or other operations.
  // Here, we simply assign the username passed as a parameter to the current object's username property.
  this.username = username;
  console.log("called"); // This line logs a message to indicate that the function was called.
}

function createUser(username, email, password){
  // This function is used to create a new user object.
  // We use the call() method to invoke the SetUsername function in the context of the current object (this).
  // This ensures that the username is set properly within the context of the new user object.
  SetUsername.call(this, username);
 
  // Assigning the email and password passed as parameters to the new user object.
  this.email = email;
  this.password = password;
}

// Creating a new user object named 'chai' using the createUser function.
// Passes "chai" as the username, "chai@fb.com" as the email, and "123" as the password.
const chai = new createUser("chai", "chai@fb.com", "123");

// Logging the 'chai' object to the console to see its properties.
console.log(chai);
