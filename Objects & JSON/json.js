// Javascript Object notation (JSON)
// When your Node.js backend communicates with the outside world (like a React frontend, a PostgreSQL database, or the Stripe Payment API), they don't exchange raw JavaScript code. They exchange a special, universal string format called JSON (JavaScript Object Notation).

// alll keys/props and values(if strings) should be wrapped in " ".

// it support nested objects , array , numbers , null , boolean , strings etc.



myJson = `{
   "Note" : "JSON dont support comments",
   "Note_2" : "Properties are always written in double    quotes",
   "Note_3" : "Preferred over XML because of easy parsing",
   "Note_4" : "we can convert JSON into objects using parsing"
}`;

console.log(JSON.parse(myJson));




// important methods backend server needs ::

// 1. JSON.stringify(obj) 
// nickname : Package Sender
// Object -> String conversion
// so it can be sent to a network


const obj1 = {
    name: "Abc",
    enrollemnt : 3099
}

const jsonString = JSON.stringify(obj1);
console.log(jsonString);





// 2. JSON.parse(obj)
// nickname : Package Opener
// json string -> Object conversion
// so it can be recieved

const iData = jsonString;
const parseObj = JSON.parse(iData);
console.log(parseObj);




// practice challange 

// You are building the payment routing API for an app. The frontend sends you a raw transaction string over the network. Your job is to open it up, clean up the formatting, verify its values, and re-serialize it to be stored securely in the database.

// The Parse: Use the correct JSON. method to convert incomingPayload into a live JavaScript object named txnObj.

// The Clean: Use your string methods to .trim() the whitespace out of txnObj.transaction_id.

// The Security Seal: Use Object.seal() or Object.freeze() on txnObj so no one can maliciously inject keys or delete records, but change the .status key to "SUCCESS".

// The Serialize: Use the correct JSON. method to turn your updated, live txnObj back into a secure string called outgoingPayload.

// The Log: console.log(outgoingPayload)


const incomingPayload = '{"transaction_id": " TXN-998 ", "amountUSD": 250, "status": "PENDING"}';

// sting -> object
const parsedPayload = JSON.parse(incomingPayload);

parsedPayload.transaction_id = parsedPayload.transaction_id.trim();
Object.seal(parsedPayload);
parsedPayload.status = "SUCCESS";

console.log(parsedPayload);

// object -> string
const outPayload = JSON.stringify(parsedPayload);

console.log(outPayload);


