// ____ Destructuring ____
// when we extract the values from array and object
// nickname : Clean extractor

// When a frontend sends data to your API, it arrives as a massive object (usually called req.body). Without destructuring, you have to write req.body.username, req.body.password, etc., over and over. Destructuring rips exactly what you need out of the payload instantly.




// syntaxes of extraction :
  

  // syntax 1 :: new_array[var1,var2,var3] = old_array; 

const arr = ["a","b","c","d"];
const [user1,user2,user4,user5] = arr;
console.log(user5); // d



  // syntax 2(using rest paramenter) :: new_array[var1,var2, ...var3] = old_array;

const arr2 = ["a","b","c","d"];
const [user6, ...user7] = arr2;
console.log(user7); // b,c,d


  // if wnat to skip some parts leave it ___ waith a comma

const arr3 = ["a","b","c","d",'e','f'];
const [user10, , , ...user17] = arr3; // , , , are skipped.
console.log(user17); // d,e,f








// ____ Renaming Variables ____

// ":" can be used to rename column / property names.
// smtimes database used weird names it is used to rename them instantly.


const records = {
    user_name: "Abc",
    phn_no: 956251511 
};

const { user_name : username , phn_no : phone } = records;

console.log(records); // doesn't change the real ones.
console.log(username); //Abc









// ____ Nested Destructing ____

// to extract deep driven object / nested object values .
// syntax : const { path : {extracted property name} } = obj_name


const records2 = {
    userId: "Abc123",
    Address: {
        main: "India",
        temp: "USA"
    } 
};

const { Address : {main} } = records2;

console.log(main); //India










// Destructuring Practice Examples :


// 1. Stripe's payment API sends back a deeply nested object. Your database requires specific variable names.

// The Requirement: In one line of destructuring, extract amount. Extract id but rename it to transactionId. Extract email.
// Print all three variables.



const stripeResponse = { 
    metadata: { 
        id: "txn_9876", 
        amount: 4500, 
        customer: { 
            email: "boss@company.com" 
        } 
    } 
};


const { metadata : {id : transactionId, amount , customer : email} } = stripeResponse;

console.log(transactionId , amount , email );













// 2. A user registers for your app, but they left the optional settings blank. If you try to save undefined to the database, the server will crash.

// The Requirement: In one line, destructure username, theme, role, and notifications.

// The Catch: If role is missing, it must default to "user". If notifications is missing, it must default to true.

// Print all four variables to prove the defaults worked.



const incomingRegistration = { 
    username: "NightOwl_99", 
    theme: "dark" 
}; 

const actualRegistration = { username , theme , role = "user" , notification = true } = incomingRegistration;

console.log(username , theme , role ,notification);









// 3. A legacy database spits out user data as a raw array instead of an object. You only need the ID and the Role to verify their permissions.

// The Requirement: In one line of array destructuring, extract the ID (1042) into a variable called userId, and the Role ("ADMIN") into a variable called accessLevel. Ignore the name, email, and status completely.

// Print both variables.


const rawDbRow = [1042, "Alice", "alice@secure.com", "ADMIN", "active"];

const extracted =  [userId , , ,accessLevel] = rawDbRow;

console.log(userId , accessLevel);








