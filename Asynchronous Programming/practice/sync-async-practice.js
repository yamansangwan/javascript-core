{

// sync prediction of the flow 

console.log("A");
// 1 -> a as per main stack 
console.log("B");

console.log("C");
// main stack -> "A" -> "B" -> "C"
 }   



 {

// async 

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

// here setTimeout is async code it gets stored into side stack until the main stack is empty 
// gets executed after all the sync code

console.log("C");

 }



 {

// again async

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

// even zero ms can't make async execute before sync code 
// JS is not Asynchronous

console.log("End");

 }




{

    // multiple timers

console.log("1");

setTimeout(() => {
    console.log("2");
}, 2000);

setTimeout(() => {
    console.log("3");
}, 1000);

console.log("4");

// output is 1 -> 4(sync) -> 3 -> 2 (async acc to tmer delay)

}




{

    // sync vs async

console.log("Login Started");  // sync

setTimeout(() => {
    console.log("Database Checked");
}, 3000);

console.log("Response Sent"); // async

// Login Started -> Response Sent -> Database Checked

}

    
