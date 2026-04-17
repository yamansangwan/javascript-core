// _____break_____
// breaking the loop
// normal - loop exits when ends
// with break - we can force to an perticular value/condition.

let sum = 0; // initial value.
let arr = [2,66,44,"hehe","aa",88,95]; // array
let moves = 0;
const maxMoves = 3;
while (moves < maxMoves) { 
    // while condition true which will always be.
     // pick random form array.
    let randomNum = arr[Math.floor(Math.random() * arr.length)];
    
    if (typeof(randomNum) === "string") {
        console.log("oops picked a string")
         break; // only stops while
    }
    else {
        sum += randomNum;
        moves ++; 
        console.log(sum);       
    }
}







// _____continue_____

// countinue skips to the next iteration


let sum = 0; // initial value.
let arr = [2,66,44,"hehe","aa",88,95]; // array
let moves = 0;
const maxMoves = 3;
while (moves < maxMoves) { 
    // while condition true which will always be.
     // pick random form array.
    let randomNum = arr[Math.floor(Math.random() * arr.length)];
    
    if (typeof(randomNum) === "string") {
        console.log("oops picked a string")
        continue; // skip to the next iteration.
    }

        sum += randomNum;
        moves ++; 
        console.log(sum);       
  
}

console.log(sum);



