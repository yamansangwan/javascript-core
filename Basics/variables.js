// Notes about Let, Const, Variables , Datatypes , String manipulations




// “var” has no block scope
// Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.

// variable used function and global scope and var also ignores block and works as an global-scoped variable
// whatever is in the curly bracket {} is a block.

// var is nopt a block scope controlled bitch.
// In case of var ::
if (true) {
    var testing = "ok";
}
alert(testing); // this time alert comes with value <ok>.

// let and const are block scoped (loop destroys they destroys)..
// In case of let ::
if (true) {
    let testing = "ok";
}
alert(testing); // this will give declaration/reference error.


// when var is used inside a function it becomes function scoped.
// function-scoped examples:

function testing(){

    if (true){
        var boatt = "ok";
    }
    console.log(boatt);   // will works and gets printed as the output of the function testing.
}

testing();
console.log(boatt); // this will give reference error because var is being function-ass scoped variable which works inside




// var tolerate the multiple declaration and gets replaced basically.
  var example = 1;
  var example = 2;    // gets printed due to re-declaration.
  console.log(example);


// let doesn't tolerate multiple declaration.
let example = 1;
let example = 2
console.log(example);  // gets syntax error hehe.



// hoisting raising is when you declare a variable it always gets processed in the top of the fuction
// function me chaaye last me likho chaaye block k bhaar likho variable gets processed first.

function testing(){
    example = "hehe";
    if(true){
        // var example;             case 1.
        console.log(example);
    }
     // var example;              case 2.
}

testing();

// always remember variable declaration is only hoisting but not the assignments and consoling.




//“immediately-invoked function expressions”  IIFE   (old techsss)

(
    function(){

    }
)();


