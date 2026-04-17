// .map() works like forEach().
// syntax -> arr.map((value,index,array => { });
// .map() creates a new array to perform operations on each elements of array.
// .map() -> for new array.
// forEach() -> for existing array.

const greetings = ["hi" , "hello" , "hlo"];
greetings.map((value => console.log(value)));



// making a new array using map with doubled value.

const marks = [34,42,22];
let marks2 = marks.map((hehe) => {
    return hehe * 2 ; 
});
console.log(marks,marks2);



// another simple example 

const marks3 = [66,77,88];
let b = marks.map((value , index , array) => {
    return (value , index , array)
})
console.log(b);


