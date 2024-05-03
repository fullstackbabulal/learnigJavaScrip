// Define a class named User
class User {
  // Constructor function to initialize the 'username' property
  constructor(username){
      this.username = username; // Set the 'username' property
  }

  // Method to log the username
  logMe(){
      console.log(`Username: ${this.username}`);
  }

  // Static method to create an ID (not associated with any instance)
  static createId(){
      return `123`; // Return a static ID
  }
}

// Create a new instance of the User class named hitesh
const hitesh = new User("hitesh");

// Define a class named Teacher that extends User
class Teacher extends User {
  // Constructor function to initialize username and email
  constructor(username, email){
      super(username); // Call the constructor of the superclass (User)
      this.email = email; // Set the 'email' property
  }
}

// Create a new instance of the Teacher class named iphone
const iphone = new Teacher("iphone", "i@phone.com");

// Output the ID created using the static method of the User class
console.log(iphone.createId()); // Output: 123
