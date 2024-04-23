// Object initialization using object literal notation
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'painting', 'hiking'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA'
    },
    greet: function() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  };
  

//const tinderUser = new Object() // intialing Singleton Object
const tinderUser = {}// intialing Literals Object

console.log(tinderUser)//outPut will be same here in Both Cases

// Declaring Singleton Object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Logging the tinderUser object
// console.log(tinderUser);

// Creating an object for a regular user
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing and logging the firstname property of the fullname object inside regularUser
// console.log(regularUser.fullname.userfullname.firstname);

// Creating objects obj1, obj2, and obj4
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merging obj1 and obj2 into obj5 using assign syntax
const boj5 = Object.assign({}, abj1, obj2, obj4);

// Merging obj1 and obj2 into obj3 using spread syntax
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Accessing and logging the email property of the second user in the users array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// Logging keys, values, and entries of the tinderUser object
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Checking if the tinderUser object has the isLoggedIn property
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Creating a course object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring the course object to extract the courseInstructor property
const {courseInstructor, coursename, price} = course
// in this line making object key to shorter like "courseIntructor => instructor"
const {courseInstructor: instructor} = course

// Logging the value of the instructor variable
// console.log(courseInstructor);
console.log(instructor);

// JSON representation of an array containing three empty objects
[
    {},
    {},
    {}
]
