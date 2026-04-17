// test for operators ::


// 1. The Scenario: You are writing the logic for a route that lets a user view a premium video. To get access, the user MUST be logged in (isLoggedIn). Furthermore, they must EITHER have an active subscription (hasSubscription) OR an active free trial (hasFreeTrial).

// Your Task:

// Create these variables:
// const isLoggedIn = true;
// const hasSubscription = false;
// const hasFreeTrial = true;

// Create a single variable called canWatchVideo and assign it a boolean expression using && and || that perfectly calculates their access. (Hint: You will need parentheses () to group the logic correctly).

// console.log(canWatchVideo) to prove it works.

const isLoggedIn = true;
const hasSubscription = false;
const hasFreeTrial = false;

const canWatchVideo = (isLoggedIn == true && (hasSubscription == true || hasFreeTrial == true)); // should have written isLoggedIn && (hasSubscription == true || hasFreeTrial == true));
console.log(`user status ${canWatchVideo}`);







// 2. Look at the following 4 statements. Without running them in your editor first, predict whether each one will print true or false, and write a comment explaining why. Once you have your predictions, run the code to see if you survived.

console.log( "0" == false );   // Prediction: True
console.log( "0" === false );  // Prediction: False
console.log( 1 !== "1" );      // Prediction: False
console.log( !!"hello" );      // Prediction: hello i think it will neutralise (Hint: What does a double-NOT do to a string?)


// ! this converts any value into boolean.
// !! is used to make values into true or false.
// any string if its not empty is true.


// In JavaScript, there are exactly 6 Falsy values:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN





// The Scenario: You are building an API that registers new users. The user is supposed to send a username in the payload. However, sometimes users send an empty string "" by accident, or the data is completely missing (undefined).

// In backend JavaScript, developers use the || (OR) operator to assign "fallback" or "default" values on a single line. This relies on understanding "Truthy" and "Falsy" values.

// Your Task:
// Run this exact code:

let incomingUsername = ""; // The user sent a blank string
let finalUsername = incomingUsername || "Anonymous_User";
console.log(finalUsername);

// The Question you must answer:
// Why does finalUsername become "Anonymous_User" instead of staying as ""? Explain how the || operator treats the empty string in JavaScript.

// in javascript or needs ANY ONE of the given expression/condition to be true to give a value now here empty string "" worked as an undefined or can say 0 value but Anonymous_User is an positive value as per its a string , or choosed the positive or / bigger value.






// The Ternary Status Code Challenge:
// In backend development, if we find a user in the database, we send an HTTP status code of 200 (Success). If we don't find them, we send a 404 (Not Found).

// Your Task:
// Create a variable: let userFound = true;
// A Ternary Operator is a one-line if/else statement. Its syntax is: condition ? ifTrue : ifFalse;
// Create a const variable called statusCode and use the Ternary Operator to assign it either 200 or 404 depending on userFound.
// console.log your result.

let userFound = false;
const statusCode = (userFound == true) ? `Code 200` : `Code 404`;
console.log(statusCode);




// in conditional statements '?' operator is used to make it shorter by using a syntaxlike
// {const example = condition ? true : false;}
// we can use it like a multiliner conditional operationlike ::
// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );









































































