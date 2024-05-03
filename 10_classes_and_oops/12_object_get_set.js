// Define a User object using object literal notation
const User = {
  // Define private properties _email and _password
  _email: 'h@hc.com',
  _password: "abc",

  // Define getter method for the email property
  get email(){
      return this._email.toUpperCase(); // Return the value of _email in uppercase
  },

  // Define setter method for the email property
  set email(value){
      this._email = value; // Set the value of _email
  }
};

// Create a new object named tea with User as its prototype
const tea = Object.create(User);

// Output the value of the email property of the tea object
console.log(tea.email); // Output: H@HC.COM
