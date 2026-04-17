// HOF
// take one or more functions as an argument
// and can return a function as a result

function bad(){
    console.log("im a bad boyy")
};
function good_bad(boy){   // this is HOF
    console.log("you are a good boy or bad boy ??")
    boy()
}
good_bad(bad);  // passing function as an argument here.




// bigger example and use case so we can use the functions again and again as argumnents in an HOF

const radius = 20;
const area = function(radius){
    return (3.14 * radius ** 2);
}
const diameter = function(radius){
    return (radius * 2);
}
const circum = function(radius){
    return 2 * Math.PI * radius;
}
// HOF can be used to find different results using the test(logic) functions again and again. 
let calculations = function(radius , test){
    let output = test(radius);
    return output;
}

console.log(calculations(radius,area));
console.log(calculations(radius,diameter));
console.log(calculations(radius,circum));



// hof and callback is used for the tasks which takes more time.
// callback is the function passed as a argument in a HOF.











