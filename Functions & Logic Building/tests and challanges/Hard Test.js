// hard tests on function + scope + closure

// 🐉 The Final Boss: The API Rate Limiter
// The Scenario:
// In backend engineering, if you expose a public URL (like an image search), bad actors will try to spam it with 10,000 requests a second to crash your server. To stop this, we build a Rate Limiter. It is a closure that remembers how many times a user has made a request, and blocks them if they go over the limit.

// Your Mission:

// Step 1: The Factory (Outer Function)

// Write an arrow function called createRateLimiter.

// Inside its local scope, create two variables:

// let requestsMade = 0;

// const MAX_REQUESTS = 3;

// Step 2: The Backpack (Inner Function)

// Make the outer function return a new inner arrow function.

// This inner function must accept one parameter: endpoint (e.g., the URL the user is trying to hit).

// The Logic inside the inner function:

// If requestsMade is greater than or equal to MAX_REQUESTS, it should return a string: "Error: Rate limit exceeded. Try again later."

// If they are still under the limit, it should increment requestsMade by 1.

// Then, it should return a success string: "Success: Connected to [endpoint]. (Request [requestsMade] of [MAX_REQUESTS])"

// Step 3: The Test Drive

// Outside of everything, create a new variable called apiCall and assign it the result of createRateLimiter().

// Now, console.log the result of apiCall("/get-users") four times in a row.

const createRateLimiter = () => {
    let requestMade = 0; // counts the req.
    const maxRequests = 3; // maximum reqs per user
    return (endpoint) => {  // (endpoint = URL)
           if (requestMade >= maxRequests){
            return `sorry sir req is limited to 3`;
           }
           else {
             requestMade  += 1;
            return `Successfully Loaded ${maxRequests - requestMade} requests left.`;
           }
    }
}
const apiCall = createRateLimiter();
console.log(apiCall());
console.log(apiCall());
console.log(apiCall());
console.log(apiCall()); // doubt - program crashes if we passed undefined values in mainstream languages like python and java
// javascript sets undefined and runs the logic with undefined value.

// should have used default parameter like (endpoint = "/get-users") - also says fallback.
