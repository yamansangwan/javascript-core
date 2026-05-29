// promises

// we write some code which will get executed in future some how 

// two outcomes -> response or reject 
// three state -> pending , resolved , reject
// we save it in variable in its pending state



{

// promise accepts a function 

// new Promise((res, rej) => {

// })

}




{

// promise is a constructor function thsts why we use "new"

// pattern of promises to perform sequential aync tasks 

// P1 -> res.P2 -> res.P3
// (response with next promise / task / function)



// example odf multiple promises

// 1. take bottle
// 2. fill with water
// 3. come back 
// 4. drink it



// ____ Promise Chaining _____
// using then and catch

// "then" executes when res() is executed
// catch when rej() is executed


var drink = new Promise(
    function(res , rej) {
    return res("take bottle");
})

var drink2 = drink.then(function (output) {
    console.log(output);    
    return new Promise (function (res , rej) {
            return res("fill with water")
    })
})

var drink3 =  drink2.then(function (output) {
    console.log(output);    
    return new Promise (function (res , rej) {
            return res("come back")
    })
})


var drink4 =  drink3.then(function (output) {
    console.log(output);    
    return new Promise (function (res , rej) {
            return res("drink it")
    })
})

var drink5 = drink4.then(function (output) {
    console.log(output);   

})

// P1 -> then -> P2 -> then -> P3 -> then -> ...

}






