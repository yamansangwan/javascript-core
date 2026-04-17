// Part 1: The Conceptual Interview

// q1` The Post Office: If a function is like a post office, explain the exact difference between a Parameter and an Argument.

// 1 answer - here post office is a function, there will be parameters like (address,name,from,to etc) and arguments will be the values of the parameters ("ludhiyana","Sam","punjab","Fan");

// q2 Why is using console.log() inside a function completely useless if you want to use that function's data somewhere else in your server? What must you use instead?

//2 answer - we must use return keyword instead of console.log because return returns a value to the open code to use it later like by storing it in an variable but console.log prints as output by killing the value after the end of execution.











// Part 2: The Mini-Project (The Registration Pipeline)

// trimming whitespace.
const formatName = (rawName) => {
    return rawName.trim();
};

// age verify.
const ageVerifier = (age) => {
    if (age >= 18){
        return true;
    } 
    else {
        return false;
    }
};

const finalRegistration = (givenName,givenAge)=> {
    const finalName = formatName(givenName);
    const finalAge = ageVerifier(givenAge);
    if (finalAge){
        return `Success! User ${finalName} is registered`;
    }
    else { return `Failed! User ${finalName} is underage.`;}
};

console.log(finalRegistration("  Admin_Steve ",17));








