// .reduce() - reduces teh array to a single value
// It basically gives a perticular value in return in exchange of input array.(according to the operations performed inside {}).
// syntax -> arr.reduce((running_result, value, index, array) = > {}, initial value).
// number / simple arry -> ac + value.
// object -> ac.property + value. 


// Takes the first two values (TF2) to perform return op.. then repeats the op.. using the running_result through-out other elements of the array passed for example ::

let arr = [44, 55, 66, 77, 88, 99];
let arr2 = arr.reduce(
    (hehe, indx) => {
        return hehe + indx;
    }
)
console.log(arr, arr2);





// sum example 

const arr = [2, 5, 11, 45];
const sum = arr.reduce((a, v) => {
    return a + v;
}, 5)
console.log(sum);




// total characters using reduce method

const arr = ["hi", "hello"];
const totalChar = arr.reduce(
    (a, v) => a + v.length, 0)
console.log(totalChar)




// APQ

const a = [3, 4, 5]
const reduceSum = a.reduce(
    (ac, item) => ac + item
)
console.log(reduceSum)


const b = [2, 3, 4]
const reduceMulti = b.reduce(
    (ac, item) => ac * item
)
console.log(reduceMulti)


const arr = ["hi", "hello"]
const lengthReducer = arr.reduce(
    (ac, item) => ac + item.length, 0
)
console.log(lengthReducer)




// APQ with objects and reduce



// length of strings
const arr = ["hi", "hello"]
const lengthReducer = arr.reduce(
    (ac, item) => {
        ac.total = ac.total + item.length;
        return ac;
    }
    , { total: 0 }
)
console.log(lengthReducer);



// APQ

const arr = ["hi", "hello", "hlo"]
const reDu = arr.reduce(
    (ac, item) => {
        ac.total = ac.total + item.length;
        //   ac.longest = item.length;
        if (item.length > ac.longest.length) {
            ac.longest = item;
        }
        return ac;
    }, { total: 0, longest: "" }
)
console.log(reDu)




// APQ 

const data = ["a", "abcd", "abc"]
const dataReduce = data.reduce(
    (ac, item) => {
        ac.total += item.length;
        if (item.length > ac.longest.length) {
            ac.longest = item;
        }
        return ac;
    }, { total: 0, longest: "" }
)
console.log(dataReduce);





// order analytics system
// total revenue 
// number of items 
// names of diffrent items

const orders = [
    { item: "chai", price: 100 },
    { item: "coke", price: 50 },
    { item: "chai", price: 100 },
    { item: "water", price: 20 }
];

const ordersReducer = orders.reduce(
    (ac, items) => {
        ac.totalRevenue += items.price;
        ac.itemCount = items.item;
         
        return ac;
    }, {  totalRevenue: 0, itemCount: {}  }
)
console.log(ordersReducer);



