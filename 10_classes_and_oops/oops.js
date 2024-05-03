// Define an object named 'user' with properties and methods
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  // Method to get user details
  getUserDetails: function() {
      // Log 'this' object, which refers to the 'user' object itself
      console.log(this);
  }
};

// Uncomment the following lines to demonstrate accessing properties and calling methods of the 'user' object
// console.log(user.username); // Access the 'username' property of the 'user' object
// console.log(user.getUserDetails()); // Call the 'getUserDetails' method of the 'user' object

// Define a constructor function named 'User' to create user objects
function User(username, loginCount, isLoggedIn) {
  // Assign values to properties of the newly created object using 'this'
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // Define a method named 'greeting' within the constructor function
  this.greeting = function() {
      console.log(`Welcome ${this.username}`);
  }

  // Return 'this' implicitly (not necessary as 'this' is returned by default in a constructor function)
  return this;
}

// Create instances of the 'User' constructor using the 'new' keyword
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// Log the constructor of 'userOne' to demonstrate the constructor function used to create it
console.log(userOne.constructor); // Outputs: [Function: User]
