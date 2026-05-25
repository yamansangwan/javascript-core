// extract first and last value

const drinks = ["coffee", "tea", "water"];
const [x1 ,x2] = drinks;
console.log(x1,x2);



// skip values need 10 and 30

const nums = [10,20,30,40];
const [a1 , , a2] = nums;
console.log(a1,a2);




// default values

const users = ["Alice"];
const [name , role = "guests"] = users;
console.log(users ,role);









// swap values without third variable

let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a,b);





// color extraction :

const colors = ["red"];
const[primary , secondary = "blue" , tertiary = "green"] = colors;
console.log(primary);
console.log(secondary);
console.log(tertiary);






// property extraction in objects

const user1 = {
    name1: "Ali",
    age1: 21
};

const{ name1 , age1 } = user1 ;
console.log(name1 , age1);






// renaming variables 

const user2 = {
    name2: "Ali",
    age2: 21
};
const{ name2 : username  , age2 : userAge} = user2;
console.log(username,userAge);





// Defaults in objects

const user3 = {
   name3: "Ali"
};

const { 
    name3 , 
    role3 = "guest" 
} = user3;

console.log(name3 , role3);







// now combining everything

const employee = {
   name: "Sara",
   age: 25
};

const { 
    name : employeeName  , 
    age : employeeAge , 
    department = "IT" 
} = employee;

console.log(employeeName , employeeAge , department);







// nested destructing 


{
const user4 = {
   name: "Abc",
   address: {
      city: "Delhi",
      pin: 12345
   }
};

const {
    name,
    address : { city },
} = user4;

console.log(name, city);

}





// 2.


{

const product1 = {
   item: "Coffee",
   details: {
      price: 100,
      stock: 5
   }
};

const { 
    item ,
    details : {price}
} = product1;

console.log(item , price);

}





// array inside object 
// important

{

const user5 = {
   name: "Sara",
   skills: ["JS","Node","React"]
};

const { 
    name , 
    skills : [js] 
} = user5;

console.log(name, js);


}







// object inside array

//     array
//       ↓
//   first element
//       ↓
//     object
//       ↓
//    properties


{

const orders1 = [
   {
      item:"coffee",
      price:100
   },
   {
      item:"tea",
      price:50
   }
];

const [ {item , price}] = orders1;

console.log(item , price);

}




// harder version 

// employees(object) -> property -> array -> property -> object -> property. 

{
const company1 = {
   employees:[
      {
         name:"Ali",
         city:"Delhi"
      },
      {
         name:"Sara",
         city:"Mumbai"
      }
   ]
};

const { 
      employees : [
        { name,
            city
        }
      ]
 } = company1;

 console.log(name , city);

}







// harder again

// deepest = object -> property -> array -> property -> object -> property -> array -> property. 

{
const startup1 = {
   name:"Techify",

   employees:[
      {
         name:"Ali",

         skills:["JS","Node"],

         address:{
            city:"Delhi",
            pin:12345
         }
      }
   ]
};

const {name , employees : [ { name : emp_name , skills : [skill] , address : {city}} ]} = startup1;

console.log(name , emp_name , skill , city);

}











