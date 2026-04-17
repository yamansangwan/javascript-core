// HOISTING difference between statement and expression is.
exp(); // executed.
a(); // undefined until declaration because its an variable.




// function statement - that way of writing a function is a function statement.

function exp() {
        console.log("hehe");
}

// function expression - written in a variable.

var a = function(){
    console.log("hehehe");
}


// Anonymous function - function without any name.
// used when functions are used as a value.
// can be assigned to an variable
// can be passed as an argument
// can be used in callbacks
//can be used in IIFE

var a = function(){
    console.log("hehehe");
}



// Named function - function with a named can also be assigned to a variable made a named - expression.






// all about functions and type san d its property i know 


// 1. simple function - using "function" keyword.

function example(test1){
    console.log(test1);
}
example("hehe");



// 2. arrow function - using "=>"
// without { } for smaller and non-multiline operations.

const arrowFunc = (test1) => console.log(test1);
arrowFunc("hehe");

// with return and multiline operations we use { } braces.

const multiArrow = (test1) => {
    return test1;
}
console.log(multiArrow("hehe"));


// 3. anonymous function - function without a name.
// can be assigned , used , returned its just a nameless function.

const anonFunc = () => {
    return "hehe";
}
const output = anonFunc();
console.log(output);



// 4. IIFE functions.

const iifeFunc = (((
    function(){
        console.log("hehe");
    }
)));

console.log(iifeFunc());



// 5. first class function 
// it's a property of function.
// we can assign a function as an argument to use in another function.
// we can return a value as a function.

const firstClass = () => {
    return(
         () => {
            console.log("hehe, im a function as an output. ")
         }  
    );
}
const output = firstClass();
output();

// challange question on first class asked by AI

function A(x) {
    return function B(y) {
        if (y > x) {
            return function C(z) {
                return x + y + z;
            };
        } else {
            return function D(z) {
                return function E(w) {
                    return x * y * z * w;
                };
            };
        }
    };
}

const step1 = A(2);   // x = 2
const step2 = step1(1); // y = 1 
const step3 = step2(3); // z = 3
const step4 = step3(4); // w = 4
console.log(step4);  // will return x * y * z * w;


// What is step1?  -  step 1 = B(y)
// What is step2? - step 2 = D(z)
// What is step3? - step 3 = E(w)
// What is step4? - step 4 = 24



// 6. Higher Order Functions.
// Example of a Higher-Order Function
// A higher-order function takes another function as an argument or returns a function.

const higherOrderFunc = (func) => {
    return func();
};

const myFunc = () => {
    return "hehe, function as an argument";
};

console.log(higherOrderFunc(myFunc));  // Outputs: hehe, function as an argument


// and dont know about first order function
// also not about pure vs impure functions
































