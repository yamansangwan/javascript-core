// functions and its typess

// functions like alert , prompt etc are built-in but
// we can make our own function using {function}
// its solves rewriting the whole code and instruction again and again
// we can just call a function to perform perticular operation

function testing(){
    console.log("hehe");
}
testing();




// variable declaratiopn (local variable)
// the variable only visible inside a function.

function testing(){
    let example = "hehe";    // local variable
    console.log(example);
}
testing();




// outer variable - declared outside teh function.

let outer_Variable = "haha";
function testing(){
    let example =  `hehe ${outer_Variable}`;    // local variable
    console.log(example);
}
testing();





// if same variable but (1 is outer-declared)and (1 is local-variable).


let example = "haha";
function testing(){
    let example =  `hehe `;    // out-shadows the outer variable.
    console.log(example);
}
testing();




// parameters can be passed to give choiced(we get to choose) data using the parantheses.

function testing(num1 , num2){
    let calculation = num1 + num2;
    let output = `num1 + num2 = ${calculation}`;
    console.log(output);
}
testing(2,3);
// testing(2); //Nan undefined value. gets default value if not passed any arguments.






function testing(From,To = "SmOne"){  // can call anothe function using default values.
         console.log(From + ` to ` + To);
}
// testing();    both value undefined.
// testing("God");   2nd value undefined.
// testing("God" , "Someone");   takes the passed argument.
testing("God",);  // take the default value from the parameters.







// Returning a value

// returns the value to the calling code as an output


function ageChecker(age){
    if(age>=21){
        return ("you can drink , but not drink and drive");
    }
    else {
        return ("you can't drink and also cant drive");
    }}
    
    // let arr = [14,18,21,25,66];
    // let age = arr[Math.floor(Math.random()*4)]

    ageChecker(45);












