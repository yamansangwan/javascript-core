// return 18 and old witha  new array
const ages = [16, 21, 17, 30, 14];
const allowedAge = ages.filter(item => item > 18);
console.log(allowedAge);

// adding five
const prices = [10, 20, 30];
  const newPrices = prices.map((item) => item + 5 );
  console.log(newPrices);

// total score 
  const scores = [50,50,50];
  const totalScore = scores.reduce(
  (ax,item) => {
   ax = ax + item
   return ax;
} , 0
  );
  console.log(totalScore);



//   - **Data:** `const dbLogs = [" 400", "VOID", " -50 ", "ERR_502", " 100 "];`        
//     - **Requirements:** You must build a _single chained pipeline_ (no temporary variables) that:        
//         1. Cleans the spaces and converts the strings to Numbers.            
//         2. Filters out the `NaN` errors.          
//         3. Filters out the negative numbers (we only want positive deposits).            
//         4. Calculates the total sum of the remaining valid deposits.            
//     - Return the final total number.



// try 1 old methods + fumbled + wrong logics ::
// const dbLogs = [" 400", "VOID", " -50 ", "ERR_502", " 100 "];
// const cleanerFunc = () => {   
//     let total = 0;
//     return (a) => {

//         for (let i = 0; i< a.length; i++) {
//             let cleanedData = Number(a[i].trim());
//             if (Number.isNaN(cleanedData)) {
                
//             }
//             else if (cleanedData < 0) {
                
//             }
//             else{
//                 total = total + a[i]
//                 return total;
//             }
//         }
//     }
// }

// const result = cleanerFunc();
// console.log(result(dbLogs));




// Try 2 with array methods
const dbLogs = [" 400", "VOID", " -50 ", "ERR_502", " 100 "];
const cleanedFunc = (a) => {
    let mappedElements = a.map(
        item => Number(item.trim())
    )
    let filteredElements = mappedElements.filter(
        item => !isNaN(item) && item > 0
    )
    let totalSum = filteredElements.reduce(
        (ac,item) => {
            ac = ac + item
            return ac;
        } , 0
        
    )
    return totalSum;
}

console.log(cleanedFunc(dbLogs));








// - **3.2 The Secure Inventory API (Closures + Hybrid Logic)**
//     - **Requirements:** Build a factory arrow function called `createWarehouse`.        
//     - It must securely hold: `let capacity = 3;` and `let storedItems = [];`.    
//     - It must return an inner function that accepts an array of incoming items.        
//     - **The Logic (Inside the inner function):** * Loop over the incoming array (you may use a classic loop OR modern methods, your choice).        
//         - If the item is exactly `"bomb"`, print `"SECURITY BREACH"` and instantly kill the loop/process.            
//         - If the `storedItems` array length reaches `capacity`, print `"WAREHOUSE FULL"` and kill the loop/process.           
//         - Otherwise, add the item to the `storedItems` array.            
//         - The inner function must return the `storedItems` array.


const createWarehouse = () => {
  let capacity = 3;
  let storedItems = [];
  return (cI) => {
    for (let i = 0; i < cI.length; i++){
        if (cI[i] == "bomb"){
            console.log("SECURITY BREACH");
            continue;
        }
        else if (capacity <= 0 ){ 
            console.log(`STORAGE FULL`)
            break;
        }
        else {
            storedItems.push(cI[i]);
            capacity --;
        }
    }
    return storedItems;
  } 
}
incomingItems = ["bomb" , "sword" , "katana" , "axe", "picaxe"]
const addItems = createWarehouse();
console.log(addItems(incomingItems));






// rewrite ina single line
    ```
    const nums = [1, 2, 3];
    let doubled = [];
    for(let i = 0; i < nums.length; i++) {
        doubled.push(nums[i] * 2);
    }
    ```
    const nums = [1, 2, 3];
    const doubledNumber = nums.map(item => item * 2)





//  The Search Engine:
// ** Write an arrow function called `searchDatabase`. It takes two parameters: `database` (an array of strings) and `query` (a single string). It should return `true` if the database includes the query, and `false` if it doesn't. _Requirement: It must ignore capital letters and spaces. Searching for " APPle " should successfully find "apple" in the database

db = ["apple","mango,","kiwi","watermelon"];
const searchDatabase = (database,query) => {
         let cleanedQuery = query.trim().toLowerCase()
         return database.includes(cleanedQuery);
}
console.log(searchDatabase(db,"Pineapple"));
console.log(searchDatabase(db,"APPle"));


