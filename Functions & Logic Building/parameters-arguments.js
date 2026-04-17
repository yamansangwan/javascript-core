//rest parameters "..."
//function can be called with higher/many number of arguments wether them is passed or not.

let exampleFunc = (a,b) => console.log(a + b);
exampleFunc(1," haha ",3,4);  // picks only the first two values.


// "..." used to gather the arguments in an array.

let exampleFunc = (...arr) => console.log(arr);
exampleFunc(1,2,3,66); //rest arguments.





// another example 

let exampleFunc = (a,b,...arr) => {
    console.log(a + b ,arr);
    console.log(Math.max(...arr));
};
exampleFunc(1,2,3,4,5);






// default parameters
// when there is undefined value of the argument default parameter uses the default passed value of parameter insid ();

function exampleFunc(a=3,b){
    console.log(a+b);
}
exampleFunc(4,7); // a gets assign value 4.
exampleFunc(undefined,7); // default value a = 3 got assigned.



// function parameters are undefined untill default value is passed. "func (num1,num2){} "









// arguments object ::
// when we pass number of values in a function without passing the parameters it gets stored in a array called "arguments" keyword.


function example(){
   console.log(arguments[3]);  //arguments array.
}
example(1,2,3,4,5,6);

















