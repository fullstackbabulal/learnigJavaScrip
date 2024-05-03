// Define a class named User
class User {
  // Constructor function to initialize email and password properties
  constructor(email, password){
      this.email = email; // Set the email property
      this.password = password; // Set the password property
  }

  // Getter method for the email property
  get email(){
      return this._email.toUpperCase(); // Return the email value in uppercase
  }

  // Setter method for the email property
  set email(value){
      this._email = value; // Set the email value
  }

  // Getter method for the password property
  get password(){
      return `${this._password}hitesh`; // Return the password value with "hitesh" appended to it
  }

  // Setter method for the password property
  set password(value){
      this._password = value; // Set the password value
  }
}

// Create a new instance of the User class with email "h@hitesh.ai" and password "abc"
const hitesh = new User("h@hitesh.ai", "abc");

// Output the uppercase email using the getter method
console.log(hitesh.email); // Output: H@HITESH.AI
