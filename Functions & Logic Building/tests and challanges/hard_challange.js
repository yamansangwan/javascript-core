// hard challange 

// The Spy Transmitter (Callbacks)
// The Business Requirement: You are writing software for a spy agency. The agency has different ways of modifying text before sending it over the radio. They need a "Transmitter" system that can accept a raw message, and a method for how to modify it, and then spit out the final message.


// The Rules:

// Build one tool that takes a string and returns it completely in UPPERCASE with "!!!" added to the end.

// Build a second tool that takes a string, removes all the empty spaces from the outside, and returns it completely in lowercase.

// Build the main Transmitter Engine. It must accept two parameters: rawText, and modifierFunction. Inside the engine, it should pass the rawText into the modifierFunction, and return the result.

// Your Test:
// Pass the string "   Target Located   " and your second tool into the Transmitter Engine. console.log the result. It should print "target located".


// tool 1 
const upTransmitter = (secMsg) => {
     return ` ${secMsg.toUpperCase()} !!!`;       
     };

// tool 2
const loTransmitter = (secMsg2) => {
    return secMsg2.trim().toLowerCase();
}

// main tool - what i thought 
// const Transmitter = (rm1,rm2) =>{
//     const transmittedUp = upTransmitter(rm1);
//     const transmittedLo = loTransmitter(rm2);
// }
// const result = `your transmitted msg is : ${Transmitter("   Target LOCKED ", "ptaa NHII")}`;
// console.log(result);


//main tool according to you 
const Transmitter = (rm,mFunc) => {
         return mFunc(rm); // here this line confused me too much at the end
}
const result = `your transmitted msg is : ${Transmitter("target Locked", loTransmitter)}`;
console.log(result);

















