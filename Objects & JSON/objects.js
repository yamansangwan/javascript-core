





// object behavious with for...in
// object can work as a list sortner sometimes in perticular conditions like this ::

// sorts in ascending order

let sons = {
    "55" : "you 14",
    "5" : "you 2",
    "61" : "you 33"
}
for (son in sons) {
    console.log(son); // 5 55 61
}




// for same but different situation ::

let sons = {
    "son 12" : "you 14",
    "son 5" : "you 2",
    "son 61" : "you 33"
}
for (son in sons) {
    console.log(son); // 12 5 61
    console.log(sons[son]);
}

// for example we want to make a site for a perticular company / country so we want to list kesy / items accordingly to come first ....
// but this converts strings into integers if there is no error in it.
// same as "(Number() function) converts string to number".
// but conversion should have same integer property.




// non integers are in listed order only.

// cheat code to fix ascending order prevention issue.

let sons = {
    "+55" : "you 14", // added +
    "+5" : "you 2", // added +
    "+61" : "you 33" // added +
}
for (son in sons) {
    // added + 
    console.log(+son); // 55 5 61
}






// _____ object important points _____

let sons = {
    "+55" : "you 14", 
    "+5" : "you 2", 
    "+61" : "you 33"
}
for (son in sons) {
    console.log(sons."+5");
}
