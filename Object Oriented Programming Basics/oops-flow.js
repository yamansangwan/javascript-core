// OOPS flow of class, method, prototype and object connection and working.


// 1. OBJECT for single user/person

{

const obj = {
    name: "abc",
    role: "monitoring",
    work(){ return `${this.name} is ${this.role}` }
}

console.log(obj);
console.log(obj.work());

}



//            ↓


// 2. CONSTRUCTOR (many entries) 
// Nickname : Factory

{

function workers(name,role) {
    this.name = name;
    this.role = role;
}

// creating multiple objects using "new" + "this" & "constructor method/fucntion"

const w1 = new workers("a","monitoring")
const w2 = new workers("b","teaching")

console.log(w1 , w2);


}



//              ↓

// 3. METHOD / FUNCTION inside

{

function workers(name,role) {
    this.name = name;
    this.role = role;
    this.work = function (){ return `${this.name} is ${this.role}` }
}

// Problem if multiple workers (1000) each will carry this function wasting more memory
// Solution : PROTOTYPE

const w1 = new workers("a","monitoring")
const w2 = new workers("b","teaching")

console.log(w1.work());
console.log(w2.work());


}





//            ↓

// 4. PROTOTYPE 
// NckName : ToolBox (Shared)

{

function workers(name,role) {
    this.name = name;
    this.role = role;
    
}

workers.prototype.work = 
function (){ return `${this.name} is ${this.role}` }

// objects borrow method from prototype

const w1 = new workers("a","monitoring")
const w2 = new workers("b","teaching")

console.log(w1)
console.log(w2);

}



//            ↓

// 5. CLASS 
// Nick Name : modern clean syntax
// put togeather syntax / machine 
// with constructor + function + prototype

{

class workers{

    //constructor function / method
    constructor(name,role){
        this.name = name;
        this.role = role;
    }

    working(){
        return `${this.name} is ${this.role}`
    }

    leaving(){
        return `${this.name} done ${this.role} and leaving the office`
    }
}

const w1 = new workers("a", "monitoring");
const w2 = new workers("b" , "teaching");

console.log(w2.working());
console.log(w1.leaving());

}



 



// cheat sheet final

// OBJECT
//   ↓
// single box


// CONSTRUCTOR
//   ↓
// factory making boxes


// METHOD
//   ↓
// actions inside


// PROTOTYPE
//   ↓
// shared toolbox
// (objects borrow methods)


// CLASS
//   ↓
// modern constructor + prototype syntax