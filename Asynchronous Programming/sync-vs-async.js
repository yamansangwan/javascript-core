// JS is not async language
// JS is single threaded (1 computation at a time)


{

// Difference of sync vs async :

// synchronous means doing / performing the tasks in sequence 
// one after another approach 
// task 1(finish) -> task 2(finish) -> task 3(finish)

// asynchronous means doing - performing tasks all togeather
// all togeather approach 
// (t1 + t2 + t3) -> first to give first outcome

}

{

// examples

// async :
// if using this its async code
// setTimeout
// setInterval
// fetch
// promises
// axios
// XMLHttpRequest

}


{

// use case : to stop server response blocking we write async code to give a valid output after request sent.

// async -> primary task (finish) -> execute secondary task/line/code

}



{

// executed LOC 
// async code ->>>>>> {sent out for execution}
// executed LOC


console.log("line 1");
setTimeout(function(){
    console.log("async callback")
} , 2000)


}



{

// callback function
// callback functions are always executed after recieving a response out of aync code

console.log("line 1");
setTimeout(function(){
    console.log("async callback")
} , 2000)

}




{

// Main Stack and Side Stack :

// Sync Code goes directly in main stack 

// Async code goe sinto side stach 
// Async goes from side to main stack when main stack is empty or executed


console.log("line1");  // main stack
console.log("line2");  // main stack

setTimeout(function(){
    console.log("async callback coming from side stack")},2000);   // side stack -> main stack (async)
    
console.log("line3");  // main stack


}




{

// communication between main stack and side stack is "EVENT LOOP"

// even loop check out if main stack is empty lets bring something from side stack



}





