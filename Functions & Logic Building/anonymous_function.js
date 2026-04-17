// anonymous functions 
// function without a name
// syntax ->  inside paranthese  (function(){});
// () helps to return function object 
// need to assign it to a varible


// can be used as an argument using a parameter assigned to a function


function example(num1,num2){
    console.log(num1+num2);

}
let example2 = (function(...arr){
    return (Math.max(...arr));       // exmaple 2 have a anonymous function.
}
)
example(3,example2(2,33,45));





