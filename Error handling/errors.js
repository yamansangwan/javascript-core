// its a way to ignore teh error in your code set 
// enables the forgivving nature of js and errors
// when user try to fk with the rules by providing a invalid input
// it allows us to throw as error using "throw" keyword


// Refrence for errors ::
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

{

let a = "1";
let b = "3";
let c = a + b;
console.log(c)


}


{

let a = "1";
let b = "3";
let c = parseInt(a) + parseInt(b);
console.log(c)

}



{

let a = "1";
let b = "s";

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError ("Wrong Input Error")
}

let c = parseInt(a) + parseInt(b);

console.log(c)


}

