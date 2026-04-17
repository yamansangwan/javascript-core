// loops
// helps to avoid repeat actions like running a perticular operation again aand agian.




// **** WHILE LOOP ****

// while loop runs till the condition is truthly
// the code inside the loop block willl be executed 
// syntax while(condition){
//    operations
//   }


let count = 5;
while (count) {
    count = count - 1;
    console.log("hehe");
}

// single execution of teh loop body is called iteration.
// while converts variables into boolean






// curly brces are not required for single line body

let count = 5;
while(count) console.log(count -= 1); 







// ***** do WHILE LOOP *****

// execute sthe condition later but body first.

let count = 5;
do {
    console.log(`another ${count} -1 `);
    count --;
} while(count) console.log(count);

// do runs according to the condition of while then after teh false value last while's body code runs.







// _____ FOR LOOP ______

// most commonly used + ckomplex
// syntax is :   for(begin; condition ; step) { }
// begin executes only 1st in teh start 
// checke dbefore every iteration
// body runs as per condition truthly
// step executed per iteration

for (count = 0; count < 5; count ++ ){
    console.log("value of count is : " + count);
}


// we can skip the (parts) in for loop 
for(;;){
    // infinite iterations

}


 


