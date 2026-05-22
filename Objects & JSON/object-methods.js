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







// We need to know if the car has a "color" property. Use Object.keys() to turn the object into an array, and then use the .includes() string/array method to console.log whether "color" exists (true or false).


const car = { 
    make: "Toyota", 
    model: "Camry", 
    year: 2022 
};
const keys = Object.keys(car);

console.log(keys.includes("color"));
          // OR
console.log(keys.some(item => item === "color"));








// Use Object.values() to extract just the numbers into an array. Then, chain a .reduce() method to calculate and console.log the total sales for the day.


const dailySales = { 
    morning: 250, 
    afternoon: 400, 
    evening: 650 
};

const salesValue = Object.values(dailySales);
const totalValue = salesValue.reduce(
    (ac,item) => ac + item , 0
);

console.log(totalValue);









// The HR department says the role and salary keys cannot be deleted, but the salary amount can be increased. Apply the correct security method, update the salary to 75000, and console.log the object.


const employmentContract = { 
    salary: 60000, 
    role: "Junior Dev" 
};

Object.seal(employmentContract);
employmentContract.salary = 75000;
delete(employmentContract.salary); // doesn't work

console.log(employmentContract);




// The warehouse sent you an object representing their entire stock, but it's not an array—it's an object where the keys are the item names and the values are the quantities.

// You must build a data pipeline. You cannot use classic for loops.

// Use Object.entries(warehouseStock). (Hint: This creates an array of arrays, like this: [ ["laptops", 5], ["keyboards", 0] ]).

// Use .filter() to throw away any item that has 0 stock. (Hint: If your item is ["keyboards", 0], index 0 is the name, index 1 is the quantity).

// Use .map() on the filtered data to return a clean array of strings formatted exactly like this: "We have 5 laptops in stock."

// console.log the final array of strings.



const warehouseStock = {
    laptops: 5,
    keyboards: 0,
    mice: 12,
    monitors: 0,
    cables: 45
};

const itemArr = Object.entries(warehouseStock);

const stockfilteration = itemArr.filter(
    item => item[1] > 0        
);

const finalStock = stockfilteration.map(
    item => `We have ${item[1]} ${item[0]} in stock`
)

console.log(finalStock);



