// proto type data flow 

{

function Employee(name){
   this.name = name;
}

Employee.prototype.work = function(){
   console.log(
      `${this.name} is working`
   );
}

const e1 = new Employee("Ali");
const e2 = new Employee("Sara");

console.log(
   e1.work === e2.work
);

e1.work();
e2.work();

// Output?
// ans - 1. True , 2. Ali is Woring , 3. Sara is working

// Why is the first output true or false?
// ans - 1st is True {sharing same toolbox(function)}

// Where is work() actually stored?
// ans - work is a prototype function stored in the property of constructor Employee

// Why is Prototype useful here?
// ans - idk , i think it gives a property which contains a function to perform anytime  

// 1 method can be used by many 

}




// A Delivery Company

// Rules :
// Use Constructor Function
// Use Prototype
// deliver() must NOT be inside constructor
// Both objects should share the same method

// Output :
// Package delivered to Mumbai
// Package delivered to Delhi

{

function Delivery(location) {
       this.location = location;
}

Delivery.prototype.deliver = function (){
    console.log(`Your Order Will be delivered to ${this.location}`);
    
}

const d1 = new Delivery("Mumbai");
const d2 = new Delivery("Delhi");

d1.deliver();
d2.deliver();

// idk why its undefined this time im not gonna take a look at previous programs, i want to learn this time where am i struck 

}
