// Define a User class
class User {
  constructor(username){
      this.username = username; // Initialize the username property
  }

  logMe(){
      console.log(`Username: ${this.username}`); // Log the username
  }

  static createId(){
      return `123`; // This is a static method that returns a hardcoded ID
  }
}

// Create a new User object named 'hitesh'
const hitesh = new User("hitesh");

// Uncommenting the following line would result in an error because createId is a static method and is not accessible through an instance
// console.log(hitesh.createId());

// Define a Teacher class that extends the User class
class Teacher extends User {
  constructor(username, email){
      super(username); // Call the constructor of the User class and pass the username
      this.email = email; // Initialize the email property
  }
}

// Create a new Teacher object named 'iphone'
const iphone = new Teacher("iphone", "i@phone.com");

// Call the static method createId on the Teacher class
console.log(iphone.createId()); // This will log "123" because createId is a static method and can be called on the class itself
