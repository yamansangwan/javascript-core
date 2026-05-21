// DB always returns an object instead of a single string

// onbject is a complex data structure holds the info using key value

// objects on internet is JSON

// javascript object notation = JSON

// objects are written in { } like dictionary

// syntax : const obj = { key: "value" , key: "value" };



// example
const users = {
    name : "A",   // key : value
    roll_no :20,
    enrollment : 3024 
};







// Methods of accessing a object



// ____ 1. Dot Notaion

// (.) mostly used method
// object_name.property_name

console.log(users.name);

// new property that doesn't exist can be created too.

users.blood_group = "B-";




// _____ 2. [] notaion
// have to use it when the key have " " spaces between it.
// or used when a key is stored inside a variable

const users2 = {
    "user name": 'S',
    number : 5,
};
console.log(users2["user name"]);


// can be used to make dynamic key 

let bg = "blood_group";
console.log(users[bg]);







// Deleting the properties of the object
// delete keyword is used.
// example user deleted a account 

delete users.roll_no;
console.log(users);







// Nested Objects
// when object holds another objects
// have to chaini the dots to grab access 

const users4 = {
    name: "AsAsh",
    address:{
        add1: `haryana`,
        add2: `pubjab`,
        add3: {
            main_ad1: `j***`,
            main_ad2: `g***`
        }
    }
};
console.log(users4.address.add3.main_ad2);





// Practice Challenge for objects
// Your task is to apply an automated update to this object using standard object methods.
// /Read: console.log the server's memory spec.
// Update: Change the status from "online" to "maintenance".
// Create: Add a brand new key to the main object called ipAddress and set it to "192.168.1.50".
// Delete: For security reasons, permanently delete the admin property from the object.
// The Output: console.log the entire serverConfig object at the very end to verify your changes.



const serverConfig = {
    serverId: "us-east-1a",
    status: "online",
    admin: "DevOps_Team",
    specs: {
        cpu: "16-core",
        memory: "32GB",
        storage: "1TB"
    }
};

console.log(serverConfig.specs.memory);
serverConfig.status = "Maintenance";
serverConfig.ipAddress = "192.168.1.50";
delete serverConfig.admin;
console.log(serverConfig);


