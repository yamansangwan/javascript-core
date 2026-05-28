// call() runns immediately
// bind() doesn't run immediately
// saves the func for later use 
// bind() returns a new function
// bind() method binds "this" to a function and returns a new function

{

// if we want to store object's inside function to a new variable

// where this becomes lost 

// here bind() is used 

// used to reuse function

// used when we have to use a petrticular function on different objects without overwritting it 

}


{

const car = {
    name : "R8",
    year : 2016
}

const brand = {
    name : "AUDI"
}

const sell = {
    name : "baua",
    amount : 1400000
}

function congrats () {
    console.log(this.name)
}

congrats.bind(brand)();
congrats.bind(car)();
congrats.bind(sell)();

}


