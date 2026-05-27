// Classes

// classes can be defined as class declaration , class expression 

// classes are templates  fro creating objects
// classes are used as blueprint to craete multiple objs

// syntax : class {}

// Constructors gets called out whenever class is executed.

//example

class user {

     constructor () { 
          console.log(" this is a constructor ")
      }
   


}











// 1. Constructor 

// problem it solves : when we need multiple inputs objects(users)

{

const u1 = { name:"a" };
const u2 = { name:"b" };
const u3 = { name:"c" };   

}

// Constructor : Function used as blueprint for creating many similar objects.
// Constructor gets executed the millisecond after the class executed.

{

function userTest(name) {
     this.name = name;
}

// this : current object being created
// new : creates new / fresh objects
// final returned value is a object

const t1 = new userTest("a");
const t2 = new userTest("b")
console.log(t1 ,t2);

}


{

function students(name, enrollement) {
     this.name = name;
     this.enrollement = enrollement;
}

const s1 = new students("abc" , 5489); // creating new obj each time
const s2 = new students("bcc" , 5488);

console.log(s1 , s2);

}

// + Backend UseCase : for products , users , orders etc.











// 2. Prototype

// shared storage for methods
// solves : shared methods (functions) 

// example : executed a shared, assigned funtion 
// diagram :

//   USER 1
// ┌────────┐
// │ name   │
// └────────┘
//     │
//     ▼
// shared toolbox
// ┌─────────────┐
// │ greet()     │
// │ login()     │
// └─────────────┘


//   USER 2
// ┌────────┐
// │ name   │
// └────────┘
//     │
//     ▼
// same toolbox




// same code witout prototype

{

function students(name, role){
     this.name = name;
     this.role = role;
     this.announce = () => { return `${this.name} is ${this.role}` };
}

const s1 = new students("a","monitor");
const s2 = new students("b","student");

console.log(s1, s2);
 // here announce is wasted but can be healed or used using prototype

}



// with prototype

{

class S{

     students(name, role){
     this.name = name;
     this.role = role;
     
}

students.prototype.announce = () => 
     { return `${this.name} is ${this.role}` };

}




const s1 = new students("a","monitor");
const s2 = new students("b","student");

console.log(s1, s2);

}

// so here JS look that does students have announce ?
//                ↓
//        no ? -> search prototype
//                ↓
//        found ? -> Yes -> RUN