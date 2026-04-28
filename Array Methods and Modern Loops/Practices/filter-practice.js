// practice using filter.js



// keeping only valid strings 
const arr = [" hii" , "hello" , " bye  " , ""];
const greets = ["hii" , "hello"]
const filArr = arr.filter(
    item => greets.includes(item.trim()))
const mapArr = filArr.map(
    item => item.trim()
)
console.log(mapArr);




// keeping even numbers

const nu = [1,2,3,4,5]
const eveNu = nu.filter(
    item => item % 2 == 0
)
console.log(eveNu)



// removing empty strings 

const arr = ["hii", "" , "hello"]
const filArr = arr.filter(
    item => item.trim() !== ""
)
console.log(filArr);




// keeping number greater than limit 40

const limit = [10,20,30,88,90,10,40]
const filLimit = limit.filter(
    item => item > 40
)
console.log(filLimit);






// keeping only the valid elements comparing to inventory

const arr = ["hi", "hello", "bye"];
const greets = ["hi", "hello"];
const filArr = arr.filter(
    item => greets.includes(item)
) 
console.log(filArr);






// keeping only valid strings 

const arr = ["hi", 123, null, "hello", undefined];
const filStrings = arr.filter(
    item => typeof(item) == "string"
)
console.log(filStrings);






// removing duplicate strings/items

const arr = ["hi" , "hello" , "hi" , "bye"];
const noDuplicate = arr.filter(
    (item,indx) => {
        // at 2nd "hi" indx becomes 0 again
        return arr.indexOf(item) === indx
    }
)
console.log(noDuplicate);







// keeping items on the basis of stocks

const items = [
  {name:"chai", stock:2},
  {name:"water", stock:0}
]
const filterStock = items.filter(
    item => item.stock > 0
)
console.log(filterStock);




