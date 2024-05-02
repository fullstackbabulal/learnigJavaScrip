// Define a User class
class User {
  constructor(username){
      this.username = username; // Initialize the username property
  }

  logMe(){
      console.log(`USERNAME is ${this.username}`); // Log the username
  }
}

// Define a Teacher class that extends the User class
class Teacher extends User{
  constructor(username, email, password){
      super(username); // Call the constructor of the User class and pass the username
      this.email = email; // Initialize the email property
      this.password = password; // Initialize the password property
  }

  addCourse(){
      console.log(`A new course was added by ${this.username}`); // Log a message indicating a new course was added
  }
}

// Create a new Teacher object named 'chai'
const chai = new Teacher("chai", "chai@teacher.com", "123");

// Call the logMe method on the 'chai' object
chai.logMe(); // This will log "USERNAME is chai"

// Create a new User object named 'masalaChai'
const masalaChai = new User("masalaChai");

// Call the logMe method on the 'masalaChai' object
masalaChai.logMe(); // This will log "USERNAME is masalaChai"

// Check if the 'chai' object is an instance of the User class
console.log(chai instanceof User); // This will log true because 'chai' is an instance of the User class
