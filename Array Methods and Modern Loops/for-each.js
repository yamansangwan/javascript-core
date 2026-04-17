// forEach iteration method
// forEach((value , index , array) => { function logic}).


// WRONG APPROACH ::
// forEach(something) -> something is always the first argument passed as it gives values.

const arr = ["hi" , "hello" , "hlo"];
arr.forEach((value) => console.log("values : " , value)); // only values.
arr.forEach((index) => console.log("indexes : " ,index)); // only values.
arr.forEach((array) => console.log("array : " ,array)); // only values.


// RIGHT APPROACH ::

const arr = ["hi" , "hello" , "hlo"];
arr.forEach((value,index,array) =>{
    console.log("values : " , value);
    console.log("indexes : " ,index);
    console.log("array : " ,array);
});






// forEach() expects a synchronous function






// converting old for loop to forEach()

const greetings = ["hii" , "hlo" , "hello" , "namaste"];
let greetings2 = [];

// traditionnal for loop
for (let i = 0 ; i < greetings.length ; i++){
    greetings2.push(greetings[i]);
}

// using forEach()
greetings.forEach((values => greetings2.push(values)));
console.log(greetings2);





