// _____* for...in loops *______

// checks / walk over every keeys of the object / array
// completely different syntax from for(;;)
// we acces through - keys.
// we gets - value stored in the key.
// syntax for (keys in users) {}

arr = {
    firstName : "HEHE",
    middleNAME : "haha",
    AGE : 67
}
for (let key in arr){// declaration of key variable.(inside loop)
    console.log(key); // prints the keys of object / array.
    console.log(arr[key]); // prints the values key holds.
}



// for concept simple examples ::

// 1. printing keys.

const car = {
    brand: "BMW",
    model: "X5",
    year: 2022
};
for (let items in car) {
     console.log(items);
}



// 2. print total marks

const scores = {
    math: 80,
    science: 90,
    english: 70
};
let total = 0;
for (let marks in scores) {
    total = total + scores[marks]; 
}
console.log("total marks is :: " , total);




// 4. new object creation with doubled value.

const data = {
    a: 10,
    b: 20,
    c: 30
};
// new object / holder.
const newData = {};
for (let items in data) {
    // transporting doubled value one by one 
   newData[items] = data[items] * 2;
}
console.log(newData);




// what will happen here ?? 

const arr = [10, 20, 30];
// thats a array not a object 
for (let i in arr) {
    // i contains the indexes of array. [0,1,2]
    // and KEYS if there is an object.
    console.log(i);
}




// we avoid for...in because it pick ups the extra properties.
// mostly used with objects.

for (let i in arr){}

// we use for...of with array due to value consumption.

for (let value of arr){}







// another conceptual test 

const obj = { a: 1, b: 2 };

for (let key in obj) {
    console.log(obj[key] + key);
} 
// 1a
// 2b 
// Type coercion = automatic type conversion by JavaScript.
// converts both key and value in same datatype.
// converted number into a string.







// for...in can be used too with araay.

let greetings2 = ["hi","hello","hlo" ];
for (let greet in greetings2) {
    console.log(greet);
}


// for...in loops over EXTRA stuff (not just indexes)
// it gives everything attached to an array.
const arr = [10, 20, 30];
arr.custom = "hello";
for (let key in arr) {
    console.log(key);
}

// Disadvantages with array ::
// its slow 
// uses extra properties
// extra work
// grabs unwanted stuff





























