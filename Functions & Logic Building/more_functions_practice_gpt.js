// drill 1 
// have to explain each step 

function a() {            // function name a
    return function() {    // a() is HOF returning function().
        return "hi";      
    }
}

console.log(a()());   // executing function() inside a();
                      // output will be hi




// drill 2

function test() {         // higher order function 
    return () => () => 5;  // anonymous function
}

const x = test();  // x = () => () => 5        
const y = x();  // () => 5
const z = y(); // z = 5 

console.log(typeof x, typeof y, typeof z);
// x is higher order function
// y is anonymous function
// z is number.





// drill 4 

function run(fn) {
    return fn();  // 1. returning function.
}

console.log(run(() => "done")); // passing anonymous function as an argument.





//drill 5

const fn = () => "hello";
fn()();  // my brain fumbels here the most 
// this means executing another function inside the function
console.log(fn()); // its a string + fn contains function in the right side.



// master drill

function outer(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}

console.log(outer(2)(3)(4));







// basic closure chain 


function a(x) {
    return function(y) {    
        return x * y;       
    }
}
console.log(a(3)(4));
// a(3) returns f(y)
// f(4) returns x * y 
// x = 3, y = 4 final 12



// three layer closure challange 

function b(x) {
    return function(y) {
        return function(z) {
            return x + y * z;
        }
    }
}
console.log(b(2)(3)(4));

// b(2) returns fn(y) now x  = 2 
// b(3) returns fn(z) now y = 3 
// b(4) returns x + y * z now z  = 4
// final returned value is 14







// function returning function conditionally

function c(x) {
    return function(y) {
        if (y > x) {
            return function(z) {
                return z * 2;
            }
        } else {
            return function(z) {
                return z + 2;
            }
        }
    }
}
console.log(c(5)(3)(10));
// c(5) returns fn(y)
// fn(3) check the condition then returned fn(z)
// fn(10) returns z + 2 
// final 12





// trap and function returning 

function d(x) {
    return function(y) {
        return x + y;
    }
}
console.log(d(2)(3)(4));
// d(2) returns fn(y)
// fn(3) return x + y 
// (4) will give an error 
// it should be liek console.log(d(2)(3));






// mixed execution

function e(x) {
    return function(y) {
        return function(z) {
            return x(y) + z;
        }
    }
}
const fn = (n) => n * 2;
console.log(e(fn)(3)(4));

// 1. i think thats a guess im not much confident e(fn) will give error because n is not defined e(fn())
// 2. if thats not the case ::
//    x = fn returns fn(y)
//    fn(3) returns fn(z)
//    fn(4) returns x(y) + z
//    where x = fn   fn(3) + 4
//    10


