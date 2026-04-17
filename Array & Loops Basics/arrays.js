// array
// it is used to store ordered collections of data/values.
// store multiple items under only single variable name.
// aray can work as both quene and stack in js
// it is used to add or remove elements from the end / start of array (deque)


// syntax 1 for array
let arr = new Array();

// syntax 2 for array. (Mostly used)
let arr = [];





// positioning (index of an array)
let arr = ["gege",'gegggg','geggg','gegg']
console.log(arr[1]);



// length of an array
let arr = ["namaste","hello","hlo","hii"];
console.log(arr.length);


// showing whole array
let arr = ["namaste","hello","hlo","hii"];
console.log(arr);




// can store any type of value (func, boolean , dictionary etc.)




// arr[-1] negative positioning doesn't work in javascript.
let arr = ["namaste","hello","hlo","hii"];
console.log(arr[-1]); // undefined





// we can access using "at" 
let arr = ["namaste","hello","hlo","hii"];
console.log(arr.at(-1));




//   push , pop , shift , unshift operations using array :






// ______**** QUENE ****______ ::

// a quene is important of array used as an ordered collection.

//""quene" supports   SHIFT <-------- PUSH operations.

// push adds / appends element in the end of quene / array.

// shift uses advanced quene technique to make 2nd element 1st. (*USED FOR STARTING ELEMENT) - extracts the fstarting element of teh arary.

// unshift adds teh element in the beginning of the array.

// use FIFO approach. 









// ______**** stack ****______ ::

// stack is also a linear data structure used/follows LIFO(last-in-first-out) approach.

// uses array to perform stack opeartions.
// push , pop , peek , isEmpty.

// push() - adds a element in the end of stack / array.

// pop() - deletes a element from the end of stack / array.







// POP method (works with end of array) :
let arr = ["namaste","hello","hlo","hii"];
arr.pop();
arr.pop();
arr.pop();
console.log(arr);




// PUSH method (works with end of array) :
let arr = ["namaste","hello","hlo","hii"];
carr.push(3);
arr.push("heh");
console.log(arr);





// SHIFT method (works with start of array) :
let arr = ["namaste","hello","hlo","hii"];
console.log(arr.shift()); // extracted the 1st element.
console.log(arr.shift());
console.log(arr);





// UNSHIFT method 
let arr = ["namaste","hello","hlo","hii"];
arr.unshift("hehe"); // add in the beginning.
arr.unshift(4); // again in the beginning.
console.log(arr);







// extra arrays allocations 
// confusions
const storage = []; // here it is also an object.
const name = "user name"; // name is property of object
storage.name = ["hehe", "haha"];
console.log(storage[1]) ;
console.log(storage[0]) 
console.log(storage.name[1]);
