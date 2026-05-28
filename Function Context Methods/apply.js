// using apply() , call() , bind()

// apply() works same as call() but inputs a appy [] instead of single values

// call and apply executes teh function immediately but bind() returns a function for later 


{

const car1 = {
    name : "i10",
    brand : "hyundai"
}

const car2 = {
    name : "r8",
    brand : "audi"
}

const car3 = {
    name : "m8",
    brand : "BMW"
}

const display = function(price , discountPrice) {
    console.log (`Hi Sir , This is a ${this.name} car from ${this.brand} brand can be purchased in ${price} and ${discountPrice} on diwali offer`)
}

// call()

display.call(car1,99999,4999);
display.call(car2,199999,14999);
display.call(car3,299999,24999);
console.log("using call here \n");

// apply()

display.apply(car1,[99999,4999]);
display.apply(car2,[199999,14999]);
display.apply(car3,[299999,24999]);
console.log("using apply here  \n");

// bind()

display.bind(car1,99999,4999)();
display.bind(car2,199999,14999)();
display.bind(car3,299999,24999)();
console.log("using bind here \n");


}