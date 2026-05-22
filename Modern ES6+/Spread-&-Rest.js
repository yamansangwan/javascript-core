// ____ Spread Operator ____

// nickname: Copier
// spreads teh content of an array

// Use Case : In modern backend architecture, we follow a rule called Immutability. We never directly modify a database object in memory. Instead, we create a copy of it, apply the updates to the copy, and save the new version. Spread makes this effortless.



// i) Copy and updating Objects

// If you spread an object into a new object, and then write a key that already exists, the new key overwrites the old one.

const users = {
    name : "a",
    id : 51,
    status : "offline"
}

const updatedUsers = {
    ...users,
    status: "online",
    login: "today"
}

console.log(updatedUsers);







// ii) Merging Arrays.

const newUsers = ["f", "g" , "h"];
const oldUsers = ["a", "b", "c"];

const allUsers = [...oldUsers , "u","l", ...newUsers , "end"];

console.log(allUsers);












// ___ Rest Paramenters ___

// nickname: Gatherer
// ... looks like spread but do opposide things
// rest gathers leftover data in a single var , array , object

// Use Cases : i) use to make a function accept infinite arguments(logging).
// ii) strips sensitive info / data like password , before sending data towards frontend / user.





// i) Rest Parameters in function

const sLogs = (error,reason,...messages) => {
           console.log(error,reason,messages);
           console.log(messages);
}

sLogs("Error" , "Internet Failed" , "404" , "202" , "314");







// ii) Rest Parameters in Destructing

// Hiding sensitive info before frontend 


const records = {
    user_id : "abc",
    password : "abc@123",
    email : "no email here"
}

// seperated password (sensitive) from safe / showable info.
const { password , ...safeInfo } = records;

console.log(safeInfo); // used_id ,email







