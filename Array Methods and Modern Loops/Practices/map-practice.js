// using .map()



// double each number

const nums = [10,55,20];
const doubledNum = nums.map(
    item => item * 2   
)
console.log(doubledNum);





// upper casing strings

const strs = ["hi" , "hello" , "bye"];
const upperStrs = strs.map(
    item => item.toUpperCase()
)
console.log(upperStrs);






// index and value diffs

const strs2 = ["hi" , "hello" , "bye"];

const withIndx = strs2.map(
    (item ,indx) => `${item}-${indx}`
)
console.log(withIndx);







// trim + lowercase

const arr = ["   hi" , "HELLO "]

const tL = arr.map(
    item => item.trim().toLowerCase()
)
console.log(tL);






// extracting names from obj

const obj = [{name:"a"}, 
             {name:"b"},
             {name:"c"}, 
             {name:"d"}];

const extractedNames = obj.map(
    item => item.name
)
console.log(extractedNames);








// arr -> obj as items

const arr = ["hi" , "hello" , "bye"];
const mappedAr = arr.map(
    item => {
        return {item: item}
    }
        
)
console.log(mappedAr);







// name and orders


const ord = [
  {name:"chai", orders:["A","B"]},
  {name:"water", orders:["C"]}
];

const mappedOrd = ord.map(
    item => {
        // let orderCount = item.orders.length
        return {name: item.name , orderCount : item.orders.length}
    }
)

console.log(mappedOrd);





