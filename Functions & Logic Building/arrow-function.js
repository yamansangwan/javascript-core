//arrow functions ::
//better than function expression
//syntax is let func_name = (arg1 , agr2 ,...) => expression;
//its shorter version of let example = function(){};


let exampleFunc = (num1,num2) => Math.round(num1 / num2);
console.log(exampleFunc(20,30));


// can be used as function expression.

let age = 55;
let example = (age > 50) ? 
       () => console.log("2") :   // arguments in every statemnt.
       ()  => console.log("3");
example();




// multiline arrow function :
// uses curly braces to return and write muti-line codes and operations.

let exampleFunc = (a,b) => {
    let c = a + b;
    return c;
};
console.log(exampleFunc(2,6.0));




// used for simple and fast inline actions
// we can write multiple statements in curly braces arrow function
// simple arrow function returns right side of the => it wroks as an expression , can't write multiple statements.


const arr = [false,true,false,true,false,true,false];
let exampleFunc = () => {
    let q = arr[Math.floor((Math.random()*7 -1))];
    if (q) {
        console.log("what is your name ? ")
    }
    else {
        console.log("sorry we dont have a question for you.");
    }
};
exampleFunc();



//



