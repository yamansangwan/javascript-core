// First class function
// A FCF can be returned, stored , passed as a variable in another function
// 1. we can save them(function) in a variable

const exampleFunc = (test1) => {
    console.log(test1);
}
exampleFunc("r");

// 2. we can pass functions as arguments - "callback shii"

const exampleFunc = (test1) => {
    console.log(test1);
}
const sayHi = () => {
    return "HI hehe"
}
exampleFunc(sayHi()); // passed sayHI(); as an argument.


// 3. 

const exampleFunc = () => {
    return () => {
        console.log("HI heehe");
    }
}
const output = exampleFunc();
console.log(output());






