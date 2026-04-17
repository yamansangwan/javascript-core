// for...of loops used with while working with arrays.
// prints the values of array.
// for...of uses the values instead of indexes / keys.

// works on existing array.

let greetings = ["hi","hello","hlo" ];
for (let greet of greetings) {
    console.log(greet);
}



// iterables 
// used to make any object usable with " for...of " loop
// arrays are iterable.
// strings are iterable.(one of the object that is pre-iterable).
// if object is not a array (basically) but holds (set of data),,  we can use for..of loop efficiently soo.


// object and iterable.
let range = {
  from: 1,
  to: 5
};

// We want the for..of to work:
for(let num of range) {
    console.log(num);
}   // range is not iterable. error


// can create a iterator function to make object iterable.
// using "Symbol.iterator" -> used to start the iterations
// next() -> gives next value again and again
// till done : true. 







