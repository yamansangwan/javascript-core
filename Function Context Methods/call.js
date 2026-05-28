// call() immediately runs a function
// and manually decides what "this" should point to

// used to borrow/share functionality
// between different objects or constructors

// call() = run function now with custom "this"
// call shows direction to "THIS"

{

// without using call method

function car (carName) {
    this.carName = carName
}

function drive (carName, driverName) {
    
    car(carName);
    this.driverName = driverName
}

const d1 = new drive ("lambo" , "baua")
console.log(d1);


// normal function call
// this is lost here
// carName does not attach to drive object

}





{

// using call method

function car (carName) {
    this.carName = carName
    console.log("called this time but dont have the variables ");
    
}

function drive (carName, driverName) {
    
    car.call(carName);
    this.driverName = driverName
}

const d1 = new drive ("lambo" , "baua")
console.log(d1);


// wrong usage
// call expects:
// call(thisValue,arg1,arg2)

}






{

// using call and this to get the refrence variables

function car (carName) {
    this.carName = carName
    console.log("called this time car () but used THIS from DRIVE ");
    
}

function drive (carName, driverName) {
    
    car.call(this, carName);
    this.driverName = driverName
}

const d1 = new drive ("lambo" , "baua")
console.log(d1);



}

