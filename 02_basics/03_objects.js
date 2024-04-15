// Singleton

// Creating a symbol for a unique property key
const mySym = Symbol("key1")

// Object literal representing a JavaScript user
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing object properties using dot notation
 console.log(JsUser.email)

// Accessing object properties using bracket notation
 console.log(JsUser["email"])
 console.log(JsUser["full name"])
 console.log(JsUser[mySym])

// Modifying object property
JsUser.email = "hitesh@chatgpt.com"

// Attempting to modify a frozen object property (commented out)
 Object.freeze(JsUser)
 JsUser.email = "hitesh@microsoft.com"
 console.log(JsUser);

// Adding methods to the JsUser object
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// Invoking the greeting methods
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
