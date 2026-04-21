// forEach iteration method
// forEach((value , index , array) => { function logic}).
// forEach executes a function for each item, but returns undefined.

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





// for example usecase : sending a welcome message to new users , saving list of items to database.



// syntax practice

const arr = ["hi" , "hello" , "hlo" , "welcome"];
arr.forEach((v,i,a) => {
       console.log(v,i,a);
})


// welcome message sender using .forEach

const newUsers = ["x1","x2","x3"];
newUsers.forEach(
    (nu) => console.log(`Your Account Is Created ${nu}`)
);




// trying saving forEach in a new Variable like .map method.

const newUsers = ["x1","x2","x3"];
let newVar = newUsers.forEach(
    (nu) => console.log(`Your Account Is Created ${nu + " using forEach"}`)
);
console.log(newUsers);
console.log(newVar);






// to clear diffrence of map and array.


const orders = ["  COFFEE ", "Tea", "  poison ", "water", "espresso"];
const inventory = ["coffee", "tea", "water", "espresso"];

const processedOrders = orders.map(
    (items) => {
        let original = items;
        let cleaned = items.trim().toLowerCase();
        let valid = true;
        if (inventory.includes(cleaned)){
            valid = true;
        return {
            original,
            cleaned,
            valid
        }
    }
        else {
            valid = false;
            return {
            original,
            cleaned,
            valid
        }
        }
    }
)

// console.log(processedOrders);

let validOrders = [];
let invalidOrders = [];
// let n = 0;

const finalOrders = processedOrders.forEach(
    (items) => {
        let validity = items.valid;
        if ( validity === true){
            validOrders.push(items);
            console.log(`Serving : ${items.cleaned}`)
        }
        else {
           invalidOrders.push(items);
           console.log(`Rejected : ${items.cleaned}`)
        }
    }
    );

// console.log(finalOrders);


