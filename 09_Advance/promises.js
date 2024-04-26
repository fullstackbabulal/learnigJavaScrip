// Create a new Promise (promiseOne)
const promiseOne = new Promise(function(resolve, reject) {
  // Perform an asynchronous task
  // This could be database calls, cryptography, network requests, etc.
  setTimeout(function() {
      console.log('Async task is complete'); // Log a message indicating that the async task is complete
      resolve(); // Resolve the promise once the async task is complete
  }, 1000); // Simulate a delay of 1000 milliseconds (1 second)
});

// Consume the promise using .then()
promiseOne.then(function() {
  console.log("Promise consumed"); // Log a message indicating that the promise has been consumed
});

// Create another Promise (promiseThree)
const promiseThree = new Promise(function(resolve, reject) {
  setTimeout(function() {
      // Simulate an async task
      // Here, we're resolving the promise with an object containing user data
      resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000); // Simulate a delay of 1000 milliseconds (1 second)
});

// Consume promiseThree and log the user data when it resolves
promiseThree.then(function(user) {
  console.log(user); // Log the user data received from the resolved promise
});

// Create another Promise (promiseFour)
const promiseFour = new Promise(function(resolve, reject) {
  setTimeout(function() {
      let error = true;
      if (!error) {
          // If no error, resolve the promise with user data
          resolve({ username: "hitesh", password: "123" });
      } else {
          // If there's an error, reject the promise with an error message
          reject('ERROR: Something went wrong');
      }
  }, 1000); // Simulate a delay of 1000 milliseconds (1 second)
});

// Consume promiseFour and handle success and error cases
promiseFour
  .then((user) => {
      console.log(user); // Log the user data received from the resolved promise
      return user.username; // Return the username for further processing
  })
  .then((username) => {
      console.log(username); // Log the username received from the previous .then() block
  })
  .catch(function(error) {
      console.log(error); // Log any errors that occur during promise resolution
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // Log a message indicating that the promise is resolved or rejected

// Create another Promise (promiseFive)
const promiseFive = new Promise(function(resolve, reject) {
  setTimeout(function() {
      let error = true;
      if (!error) {
          // If no error, resolve the promise with user data
          resolve({ username: "javascript", password: "123" });
      } else {
          // If there's an error, reject the promise with an error message
          reject('ERROR: JS went wrong');
      }
  }, 1000); // Simulate a delay of 1000 milliseconds (1 second)
});

// Asynchronously consume promiseFive using async/await
async function consumePromiseFive() {
  try {
      const response = await promiseFive; // Wait for the promise to resolve
      console.log(response); // Log the response received from the resolved promise
  } catch (error) {
      console.log(error); // Log any errors that occur during promise resolution
  }
}

// Call the consumePromiseFive function to initiate the asynchronous consumption of promiseFive
consumePromiseFive();

// Fetch data from an API using the Fetch API
fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) => {
      return response.json(); // Parse the response as JSON
  })
  .then((data) => {
      console.log(data); // Log the data received from the API
  })
  .catch((error) => console.log(error)); // Log any errors that occur during the fetch operation
