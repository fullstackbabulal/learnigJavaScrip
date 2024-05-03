// ES6 class definition for a User
class User {
  constructor(username, email, password){
      // Constructor function initializes the properties of the User object
      this.username = username; // Assigns the provided username to the object's username property
      this.email = email; // Assigns the provided email to the object's email property
      this.password = password; // Assigns the provided password to the object's password property
  }

  encryptPassword(){
      // Method to encrypt the user's password
      return `${this.password}abc`; // Returns the password concatenated with "abc"
  }

  changeUsername(){
      // Method to change the username to uppercase
      return `${this.username.toUpperCase()}`; // Returns the username in uppercase
  }
}

// Creating a new User object named 'chai' using the User class
const chai = new User("chai", "chai@gmail.com", "123");

// Calling methods on the 'chai' object
console.log(chai.encryptPassword()); // Logs the encrypted password of 'chai'
console.log(chai.changeUsername()); // Logs the username of 'chai' in uppercase

// Behind the scenes (ES5 equivalent using prototype-based syntax)

// Constructor function for User objects
function User(username, email, password){
  this.username = username; // Assigns the provided username to the object's username property
  this.email = email; // Assigns the provided email to the object's email property
  this.password = password; // Assigns the provided password to the object's password property
}

// Adding methods to the User prototype
User.prototype.encryptPassword = function(){
  return `${this.password}abc`; // Returns the password concatenated with "abc"
};

User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`; // Returns the username in uppercase
};

// Creating a new User object named 'tea' using the User constructor
const tea = new User("tea", "tea@gmail.com", "123");

// Calling methods on the 'tea' object
console.log(tea.encryptPassword()); // Logs the encrypted password of 'tea'
console.log(tea.changeUsername()); // Logs the username of 'tea' in uppercase
