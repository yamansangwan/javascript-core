// using .reduce()




// sum 

const num = [10,20,30,55]

const rSum = num.reduce(
    (ac , item) => ac + item
)
console.log(rSum);





// multiply

const num = [2,3,10]

const rNum = num.reduce (
    (ac ,item) => ac * item  
)
console.log(rNum);





// total chars


const arr = ["hi","hello"];

const lengthArr = arr.reduce(
    (ac, item) => {
       return ac + item.length
    } , 0
)

console.log(lengthArr)






// maximum number

const num = [10,50,30];
const maxNum = num.reduce (
    (ac, item)  => { 
        if (item > ac) {
            return item;
        }     
        else {
            return ac;
        }  
    } , 0
)
console.log(maxNum);


// or 


const num = [10,50,30];
const maxNum = num.reduce (
    (ac,item) => (item > ac) ? item : ac
)
console.log(maxNum);







// longest strings 


const arr = ["hi","hello","bye"];
const longestString = arr.reduce(
    (ac,item) => item.length > ac.length ? item :ac
)
console.log(longestString);







// number of times occured
// duplicacy counter

const arr = ["coffee","tea","coffee" ,"coffee","coffee","tea", "water"];

const duplicacyCounter = arr.reduce(
    (ac,item,indx) => {
        if (ac[item]) {
            ac[item] ++
        } 
        else {
            ac[item] = 1.
        }
        return ac;
    } , {})// imp : intial type and value of accu should be there
console.log(duplicacyCounter);







// filter and reduce removing and counting duplicates

const arr =  ["coffee","tea","coffee","tea","coffee"];
const filteredArr = arr.filter(
    (item,indx) => arr.indexOf(item) == indx
        // if (item) {
            
        // }
        // else{
        //     return indx;
        // }
)

const reducedArr = arr.reduce(
    (ac,item, indx) => {
        if ( ac[item] ) {
            ac[item] ++
        }
        else {
            ac[item] = 1 
        }
        return ac;
    } , {}
)
// console.log(filteredArr);
// console.log(reducedArr);
console.log({uniqueItem: filteredArr,count: reducedArr});








// letters counter

const letters = ["a","b","a","c","b","a"];
// selects only the unique letters (removes teh duplicates)
const filteredLetters = letters.filter(
    (item,indx) => letters.indexOf(item) === indx 
)
// counts the fkin number of same letters
const reducedLetters = letters.reduce(
    (ac,item,indx) => {
        if (ac[item]) {
            ac[item] ++
        } 
        else {
            ac[item] = 1
        }
        return ac;
    } , {}
)
console.log({
    letters : filteredLetters ,
    duplicateLetters : reducedLetters
})