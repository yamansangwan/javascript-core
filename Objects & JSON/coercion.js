
// concentenation with arays and objects


console.log(10 + 20 + "30" + 40);
// ( 10 + 20 ) = 30.
// "30" is string 
// JS converts others in string.
// 303040.
// ____ number + string → string concatenation_____




console.log("5" - 2 + 3);
// **** only + do string concatenation

// *****/ other operators liek ( - / * ) converst it into number.






// another tests about concetenation.
console.log("10" - "5" + "2");
// 10 - 5 = 5
// 5 + 2 = 52



// another tests about concetenation.
console.log("8" + 2 * 3);
// 2 * 3 = 6
// "8" + 6 = 86

console.log("10" - 2 + "5" - 1);
// "10" - 2 = 8
// 8 + "5" = "85"
// "85" - 1 = 84

console.log(5 + "5" + 5 - 5);
// 5 + "5" = "55"
// "55" + 5 = "555"
// "555" - 5 = 550

console.log("6" * "2" + 3 + "1");
// "6" * "2" = 12
// 12 + 3 = 15
// 15 + "1" = "151" 

console.log("15" - "5" * 2 + "10");
// "5" * 2 = 10
//  "15" - 10 = 5
// 5 + "10" = "510"







console.log([] + 1);
// null + 1 
// "1"

console.log([] + []);
// null + null
// null

console.log(null + 1);
// "1"

console.log(undefined + 1);
// NaN

console.log(true + "1");
// "true1"





console.log([] + 1 + 2);
// "" + 1 = "1"
// "1" + 2 = "12"

console.log(1 + 2 + []);
// 3 + "" = "3"




console.log([] + {});
// "" + something

console.log({} + []); 
// [] → "" → 0

console.log([] + {} + 1);
// "" + [object object] + 1 = "[object object]1"  

console.log(1 + {} + []);
// 1 + object object + "" = "1 + object object"

console.log([] + {});
// 0




