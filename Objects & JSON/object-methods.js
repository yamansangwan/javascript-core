// We can't use .map() and reduce() directly on objects because it dont have an indexes
// We use objects tools for LOOPING and SECURITY 




// 1. Traversing (Looping) an obj

// By converting object into a araay

// there emain methods for conversion 

   // 1. syntax : Object.keys(obj)
   // 2. syntax : Object.values(obj)
   // 3. syntax : Object.entries(obj)

// example :
const obj = {
    name: "a",
    clas: "12th"
}
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));







// 2. Object Security 
// in node.js we use DB passwords and API keys into an object

// two methods to lock the object down to prevent run-time hacking events

    // 1. syntax: Object.freeze(obj)
    // 2. syntax: Object.seal(obj)



// i) Object Freeze

// nickname : VAULT
// completely freezes/locks the object
// it becomes read only 
// we can't do CRUD operations on the object


const idPass = {
    id: "abc",
    pass: "@123"
}
// before freezing ::
idPass.address = "India";
console.log(idPass)

//after freezing ::
Object.freeze(idPass);
idPass.email = "abc@gmail.com"; // no UPDATE
console.log(idPass) 





// ii) Object Seal

// nickname : CHECKBOOK
// Locks the structure of object
// allows us to update only the value of teh key 
// only update allowed neither Creating deletion not allowed


const idPass2 = {
    id: "abc",
    pass: "@123"
}
// before sealing ::
idPass2.address = "India";
console.log(idPass2)

//after sealing ::
Object.seal(idPass2);
idPass2.address = "USA"; // UPDATE (existing key) 
idPass2.email = "abc@gmail.com"; // no UPDATE
console.log(idPass2) 







// Practice Challenge of Object Methods

// The Scenario: You are writing the backend ledger for a banking app. The customer's account data needs to be partially secured. We need to analyze the data, lock the structure, but allow the balance to change.

// Your Business Requirements:

// The Extraction: Use an Object. method to extract just the values of bankAccount into a new array. console.log that array.

// The Security Lock: The bank's security team mandates that no one can delete the accountNumber or add new properties, but the balance must be able to go up or down. Apply the correct security method (freeze or seal) to bankAccount.

// The Proof: Write a line of code trying to delete bankAccount.accountNumber;. Then write a line updating the balance to 1200.

// The Output: console.log the final bankAccount object. If you chose the right security lock, the account number will still be there, but the balance will be successfully updated to 1200!


const bankAccount = {
    accountNumber: "CHK-9921",
    balance: 1500,
    owner: "ABccD"
};

// grabbed the values
let values = Object.values(bankAccount);
console.log(bankAccount);

// sealing for interchanging the balance
Object.seal(bankAccount);

// trying to delete accountNumber
delete(bankAccount.accountNumber);
console.log(bankAccount);

// updating the balance
bankAccount.balance = 1200;
console.log(bankAccount);



