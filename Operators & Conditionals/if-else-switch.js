// //Hard Challenge 1: The API Router Trap (switch strictness)
// The Scenario: You are building the router for a payment gateway. When a payment fails or succeeds, the banking API sends you a status code, and you need to log a specific message.

// Your Task:
// Write a switch statement that evaluates bankStatusCode.
// Add a case for the number 200: log "Payment Successful".
// Add a case for the number 400: log "Bad Request".
// Add a case for the number 402: log "Payment Required".
// Add a default case: log "Unknown Error".
// Run the code.

// The Written Question: Why did the code log "Unknown Error" instead of "Payment Required"? Write your answer as a comment below the switch statement, explaining how the switch statement handles equality under the hood.

const bankStatusCode = 402; // its a string which is undefined or a Nan value when comparing to number 402
switch(bankStatusCode){
    case 200 :
        console.log("Payment Successful");
        break;
    case 400 :
        console.log("Bad Request");
        break;
    case 402 :
        console.log("Payment Required");
        break;
    default:
        console.log("unknown payment"); // none of the case statements were true so default has benn consoled.
        // if i remove the quotes it becomes number 402 then it prints Payment Required.
};



















// Hard Challenge 2: The Black Friday Engine (if/else & Logic)
// The Scenario: You are writing the backend logic for an e-commerce checkout system. You need to calculate the exact discount percentage a user gets based on their cart size, their VIP status, and if they typed in a promo code.

// Your Task:
// Write an if / else if / else block that sets a variable called discount based on these exact rules:
// Rule 1: If the user is a VIP AND their cartTotal is 100 or more, their discount is 20.
// Rule 2: If the user is a VIP but their cartTotal is less than 100, their discount is 10.
// Rule 3: If the user is NOT a VIP, but they provided a valid promoCode (meaning the string is truthy and not empty), their discount is 15.
// Rule 4: If none of these apply, their discount is 0.
// console.log the final discount. (Given the data above, your console should print 0).

const isVIP = false;
const cartTotal = 150;
const promoCode = "";
let discount;
function savings(discount){
    if(isVIP === true && cartTotal === 100){
    discount = 20;
    console.log(discount);
}  else if (isVIP === true && cartTotal < 100){
    discount = 10;
    console.log(discount);
}  else if(isVIP === false && promoCode == true){
    discount = 15;
    console.log(discount);
}  else{
    discount = 0;
    console.log(discount);
}

};
savings();

































// Hard Challenge 3: The Ultimate One-Liner (Advanced Ternary & Fallbacks)
// The Scenario: You are formatting a user's profile to save it into a database. You need to sanitize their username and figure out their access level in just two lines of code, without ever using the words if or else.

// Your Task:
// Create a const finalUsername. Use the OR (||) operator to assign it the value of inputUsername, but if inputUsername is falsy, default it to the string "Guest".
// Create a const accessLevel. Use a Chained Ternary Operator (a ternary inside a ternary) to apply this logic:
// Is the accountStatus equal to "banned"? If yes, accessLevel is "None".
// If no, is the accountStatus equal to "active"? If yes, accessLevel is "Full".
// If neither, accessLevel is "Pending".
// Log both finalUsername and accessLevel.

const inputUser = "Hehe";
const finalUsername = inputUser || "Guest";
const accountStatus = "active";
const accessLevel = (accountStatus == "banned") ? `None` :
                    (accountStatus == "active") ? `Full`: `Pending`;
console.log(finalUsername);
console.log(accessLevel);


















// Master Problem :: 
// 🐉 The Final Boss: The "Gatekeeper" API
// The Scenario:
// You are building the registration engine for a SaaS (Software as a Service) platform. When a user clicks "Sign Up" on the frontend, their data is sent to your server.

// However, users are messy. They add extra spaces, use weird capital letters, and sometimes try to register when they are underage. Your script must clean the data, validate it, assign their storage limits, and generate a final server response.

// Your Mission Requirements:

// Step 1: The Cleanup (Day 1 Skills)
// Create cleanUsername by removing the empty spaces from rawUsername.
// Create cleanEmail by removing empty spaces AND converting it to all lowercase.

// Step 2: The Bouncer (Day 2 Control Flow & Logic)
// Create a variable let isValidUser;.
// Write an if/else block to determine if the user is valid.
// To be valid, they must pass ALL of these rules:
// userAge must be greater than or equal to 18.
// cleanEmail must include the "@" character.
// cleanUsername must be "truthy" (meaning it isn't an empty string).
// If they pass, set isValidUser = true;. If they fail, set isValidUser = false;.

// Step 3: The Database Allocator (Day 2 Switch Statement)
// Create a variable let storageLimit;.
// Write a switch statement checking the subPlan.
// If "Free", storage limit is "5GB".
// If "Pro", storage limit is "50GB".
// If "Enterprise", storage limit is "500GB".
// default fallback should be "0GB".

// Step 4: The Final Response (Day 2 One-Liners)
// Create const statusCode. Use a Ternary Operator: if isValidUser is true, the code is 201 (Created). If false, the code is 403 (Forbidden).
// Create const finalProfileName. Use the || (OR) operator to assign it cleanUsername, but if cleanUsername is falsy, default it to "Guest User".
// Use a Template Literal to console.log the final server response. It should look exactly like this:
// "Server Response [403]: Registration failed for admin_steve. Storage allocated: 0GB."
// (Note: The data injected into the string should match whatever your code calculated).

const rawUsername = "   Admin_Steve   ";
const rawEmail = "  STEVE@company.com  ";
const userAge = 17; 
const userPlan = "Pro";
// step 1 cleanup.
const cleanUsername = (rawUsername.trim()).toLowerCase();
const cleanEmail = (rawEmail.trim()).toLowerCase();
// step 2 control flow & logic.
// let isValidUser = (userAge >=18) ? `Registration Successfull` : `Cant' register you are Underage`;

let isValidUser;
if (userAge >= 18 && cleanEmail.includes('@') && cleanUsername !== "" ){
    isValidUser = true; // always use single = while assigning , == asks questions and in clean Username always yse {!==} for creating a truthly value.
} else {
    isValidUser = false;
}
// step 3 database / storage allocator;
let storageLimit;
if (isValidUser == true){
    switch(userPlan){
    case "Free" :
        storageLimit = "5GB";
        break;
    case "Pro" :        // mistake 3 used lowercase instead of upper.
        storageLimit = "10GB";
        break;
    case "Enterprise" :
        storageLimit = "500GB";
        break;
    default :
        storageLimit = "0GB";

}
} else {
    storageLimit = "0GB";
}

// step 4 the server response
const statusCode = (isValidUser == true) ? ` 201` : ` 403`;
const finalUser = cleanUsername || "Guest User";

const finalServerResponse = `State Code is ${statusCode} , ${finalUser} , your email address is ${cleanEmail} , you have ${storageLimit} storage`;

console.log(finalServerResponse);
