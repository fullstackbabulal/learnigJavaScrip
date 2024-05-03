// Define a constructor function User
function User(email, password){
  // Initialize private properties _email and _password with provided values
  this._email = email;
  this._password = password;

  // Define email property with getter and setter using Object.defineProperty
  Object.defineProperty(this, 'email', {
      // Getter function returns the value of _email in uppercase
      get: function(){
          return this._email.toUpperCase();
      },
      // Setter function sets the value of _email
      set: function(value){
          this._email = value;
      }
  });

  // Define password property with getter and setter using Object.defineProperty
  Object.defineProperty(this, 'password', {
      // Getter function returns the value of _password in uppercase
      get: function(){
          return this._password.toUpperCase();
      },
      // Setter function sets the value of _password
      set: function(value){
          this._password = value;
      }
  });
}

// Create a new User instance named chai with provided email and password
const chai = new User("chai@chai.com", "chai");

// Output the value of the email property of the chai object
console.log(chai.email); // Output: CHAI@CHAI.COM
