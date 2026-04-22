// .filter()
// return condition.
// map and filter method doesn't change original arrays
// creates a new tranformed array and return it.
// .filter() check the conditions / tests.
// filter keeps or removes the items instead of transforming them
// filter needs TRUE or FALSE not random return



// map → transform
// filter → select
// reduce → combine



let arr = [23,55,677,66,8,9];
let arr2 = arr.filter((hehe) => {
    return hehe > 50; 
});
console.log(arr , arr2);





// keeping only even numbers using filter method 

const neuu = [10, 15, 20, 25];
const neuuT = neuu.filter(item => item % 2 === 0);
console.log(neuuT);





// removing empty strings

const neuu = ["coffee", "", "tea", "", "water"];
const neuuT = neuu.filter((items => items.trim()));
console.log(neuuT);




// filtering long words 

const neuu = ["hi", "coffee", "tea", "espresso"];
const neuuT = neuu.filter(items => items.length > 3);
console.log(neuuT);




// valid items filteration 

const orders = ["coffee", "tea", "poison", "water"];
const inventory = ["coffee", "tea", "water"];
const filteredOrders = orders.filter(
    items => inventory.includes(items)
);
console.log(filteredOrders); 




// cleaning and filtering using .filter method 

const orders = ["  COFFEE ", "Tea", " poison "];
const inventory = ["coffee", "tea"];
const filteredOrders = orders.filter(
    (items) =>{
        items = items.trim().toLowerCase()
        return (inventory.includes(items))
    }
);
const mappedItems = filteredOrders.map(
    items => items.trim().toLowerCase()
) 
console.log(mappedItems);





// filtering objects 

const nObj = [
  { name: "coffee", stock: 2 },
  { name: "tea", stock: 0 }
];
const neuuT = nObj.filter(
    item => item.stock > 0
);
console.log(neuuT);




// use active status 

const nUsers = [
  { name: "A", active: true },
  { name: "B", active: false }
];
const nUserFilter = nUsers.filter(
    items => items.active === true
)
console.log(nUserFilter);





// price filteration using filter method 

const nOrders = [
  { item: "coffee", price: 100 },
  { item: "tea", price: 50 }
];
const nOrdersFilter = nOrders.filter(
    items => items.price >= 80
)
console.log(nOrdersFilter);





// mixed data filteration

const nData = ["coffee", "123", "", "tea", null];
const nDataFilter = nData.filter(
    items => typeof(items) == "string"
)
console.log(nDataFilter);


                 // Attempt 2
const nData = ["coffee", "123", "", "tea", null];
const nDataFilter = nData.filter(
    (items) => {
        // Number(items) === Number;
        typeof(items) === String;
        return items;
    }
)
console.log(nData);
console.log(nDataFilter);



           // attempt 3 - the right aproach

const nData = ["coffee", "123", "", "tea", null];
const nDataFilter = nData.filter(
  item =>
    typeof item === "string" &&
    item.trim() !== "" && 
    isNaN(item)
);
console.log(nData);
console.log(nDataFilter);




// APQ - filter
// remove invalid entries
// clean names
// match allowedUsers
// no String()
// use filter + map

const users = ["  ALICE ", "", "123", "Bob", null, "  charlie "];
const allowedUsers = ["alice", "bob", "charlie"];
// filtering / removing non strings
const filteredData = users.filter(
    item => typeof(item) === "string" && item.trim() !== "" 
)
// cleaning / formatting names of strings
const mappedData = filteredData.map(
    item => item.trim().toLowerCase()
)
// choosing what to print using conditions
const filteredAgain = mappedData.filter(
    item => allowedUsers.includes(item)
)

console.log("original data ~ ", users);
console.log("allowed people ~ ", filteredAgain);



















