// .map() works like forEach().
// syntax -> arr.map((value,index,array => { });
// .map() creates a new array to perform operations on each elements of array.
// .map() -> for new array.
// forEach() -> for existing array.

const greetings = ["hi" , "hello" , "hlo"];
greetings.map((value => console.log(value)));



// making a new array using map with doubled value.

const marks = [34,42,22];
let marks2 = marks.map((hehe) => {
    return hehe * 2 ; 
});
console.log(marks,marks2);



// another simple example 

const marks3 = [66,77,88];
let b = marks3.map((value , index , array) => {
    return (value , index , array)
})
console.log(b);




// trying saving .map method in a variable

// map transforms and "RETURNS" new array insted of consoling should use return.

const newUsers = ["x1","x2","x3"];
let newVar = newUsers.map(
    (nu) => 
        `Your Account Is Created ${nu + " using map"}`
);
console.log(newUsers);
console.log(newVar);






// currency conversion using .map method
// dollor to inr conversion 
// 93.47 times of inr

const pricingDol = [56,76,444,78];
const pricingInr = pricingDol.map( 
    // tranforming current array and storing it in a new array without affecting original array.
    (dollor) => {
       return `${dollor} in Indian Rupees is ${dollor * 93.47}`;
    }
)
console.log(pricingDol);
console.log(pricingInr);




// adding indexes to values

const nuList = ["a", "b", "c"];
const wi = nuList.map((num,indx) => `${num}-${indx}`);
console.log(wi);





// converting array to object

const nuList2 = ["coffee", "tea"];
const covObj = nuList2.map(
    (item) => {
        return {name : item};
    }
)
console.log(covObj);





// transforming odd and even numbers

const nuList3 = [10, 15, 20, 25];
const oddEven = nuList3.map(
    (num) => {
        if (num % 2 == 0) {
            return "even";
        }

        else {
            return "odd";
        }
    }
)
console.log(oddEven);






// normalising the wrong format of data

const nuList4 = ["  COFFEE ", "Tea", "  latte "];
const cleanData = nuList4.map(
    (item) => {
        return item.trim().toLowerCase();
    }
)
console.log(cleanData);





// extracting property

const nuList5 = [
  { name: "coffee", stock: 2 },
  { name: "tea", stock: 1 }
];
const xtract = nuList5.map(
    (item) => {
        return item.name;
    }
)
console.log(xtract);





// adding property 

const nuList5 = [
  { name: "coffee", price: 100 },
  { name: "tea", price: 50 }
];
const xtract = nuList5.map(
    (item) => {
        item.availability = true;
        return item;
    }
)
console.log(xtract);





// another transformation using objects

const neuu = [
  { name: "coffee", orders: ["A", "B"] },
  { name: "tea", orders: ["C"] }
];
const neuuT = neuu.map(
    (item) => {
         name = item.name;
         orders = item.orders;
         orderCount = orders.length;
         return {name , orderCount};
    }
)
console.log(neuuT);








// transforming a new array using calculations.

const arr = [2, 4, 6];
const newArr = arr.map(
    (item) => {
       values = item;
       square = item ** 2;
       return {values, square};
    }
)
console.log(newArr);







// APQ

const neuu = ["coffee", "tea"];
const neuuT = neuu.map(
    (item) => {
        return ({Order : item}).toString();
    }
)
console.log(neuuT);
