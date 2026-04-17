// challanges to practice day 1 learnings....


// 1. The Variable Test:
//Declare a const variable holding your birth year. Declare a let variable holding your current age. Write a string using Template Literals (backticks `) that says: "I was born in [year] and I am [age] years old."

const bd = 2006;
let age = 20;
var data = `I was born in ${bd} and I\`m ${age} years old `;
console.log(data); 





// 2. The Email Parser:
// Create a string variable: let email = "john.doe@startup.com". Find the string method (.split()) that splits this string into an array, isolate the domain name ("startup.com"), and log it.

let email = "john.startup@gmail.com";
let extraction = email.split("@");
console.log(extraction.at(-1));




// 3. The Sanitizer:
// Create a string variable: let query = "   SELECT * FROM users;   ". Find the string method that removes the empty spaces at the very beginning and the very end of the string, and log the clean version.

let query = "   SELECT * FROM TABLE;   ";
let extraction = query.split("   ");
console.log(extraction.at(1));











// Challenge 4: The "Bad Math" Interceptor
// The Scenario: A user tries to register on your site, but instead of sending their age as a number, a bug in the mobile app sends it as a string of text.
// Your Task:

// Declare a const variable called userAge and set it to the string "twenty".

// Declare a let variable called calculatedAge and try to divide userAge by 2.

// console.log the value of calculatedAge. (It should give you JS's favorite weird value).

// console.log the typeof that weird value.
// The Goal: Prove you understand how JS handles impossible math and what data type it assigns to the failure.

const userAge = "twenty";    // its string and it gets divided by number we gets NaN
let calculatedAge = userAge/2 ; 
console.log(calculatedAge);
console.log(typeof(calculatedAge)); // its weird but its a number so the data type is a number.






// Challenge 5: The Messy URL Parser
// The Scenario: Your server receives a raw, messy web address from a third-party service, and you need to extract exactly which database table they are trying to access.
// The Data: const incomingPath = "   HTTPS://API.STARTUP.COM/V1/USERS/PROFILE   ";
// Your Task:

// Clean the string by removing the empty spaces on the outside.

// Convert the entire string to lowercase.

// Use a string method to chop this URL into an array of smaller strings, separating them wherever there is a / character.

// Extract only the word "users" from that array and save it to a new variable.

// console.log your final extracted word.
// The Goal: Master .trim(), .toLowerCase(), and .split(). If you can do this, you can parse any URL route in Express.js.


const url = "   HTTPS://API.STARTUP.COM/V1/USERS/PROFILE   ";
let extraction = url.trim(" ");
let loweredExtraction = extraction.toLowerCase();
let sepratedExtraction = loweredExtraction.split("/");
var userExtraction = sepratedExtraction.at(4);
console.log(userExtraction);







// Challenge 6: The Hacker Defense (Sanitization)
// The Scenario: A malicious user tries to submit a comment with a hidden script to hack your database.
// The Data: let userComment = "<script>DELETE ALL DATA</script> Welcome to my profile!";
// Your Task:

// Use a string method to find and replace the exact string `"<script>DELETE ALL DATA</script> "with an empty string""` (essentially deleting the hack).

// Save the clean version in a new const variable.

// Using Template Literals (backticks), console.log a message that says:
// Safe comment saved: [insert clean comment here]
// The Goal: Prove you can use .replace() and template literals to manipulate and format user data safely.

let userCommit = "<script>DELETE ALL DATA</script> Welcome to my profile!";
let replacedCommit = userCommit.replace("<script>DELETE ALL DATA</script>","");
const cleanCommit = replacedCommit;
console.log(`Safe comment saved : ${cleanCommit}`);

