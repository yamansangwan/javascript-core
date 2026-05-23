// NickName : Unpacking operator
// backend use case : constant object updates in node js

// array and spread  
// Syntax :: const copy = [...arr];


// Object 
// Syntax :: const copy = {...user};


// Functions 
// Syintax :: sum(...nums)



// arrays

const arr = [1,2];
console.log([...arr,3]);


// objects  (updation)

const user = {
   age:20
};

const updated = {
   ...user,
   age:30
};

console.log(updated);





// another one 

const a = {
   age:20
};

const b = {
   age:30
};

console.log({
   ...a, // 30
   ...b  // 30
});





// spread basic problems 
// mking a copy

{

const a = ["a","b"];
const aCopy = [...a];
console.log(aCopy); 

}



// adding element (at end)

{

const a = ["a","b"];
const aCopy = [...a , "c"];
console.log(aCopy); 

}



// adding element at start

{

const a = ["a","b"];
const aCopy = ["z",...a];
console.log(aCopy); 

}





// merging the array

{
const a = ["coffee"]
const b = ["tea"]
const c = ["water"]

const mergedArr = [...a,...b,...c]
console.log(mergedArr);
}




// copying object 

{
const obj = {name:"Ali"}
const copyObj = {...obj}
console.log(copyObj);

}




// adding in object (active:true)

{
const obj = {
    name: "abc",
    num: 50
}
const copyObj = {
    ...obj,
    active : "online"
}
console.log(copyObj);
}




// updating in object

{

const obj = {
    name: "abc",
    num: 50
}
const copyObj = {
    ...obj,
    num: 55
}
console.log(copyObj);

}






// prediction questions 

{

const a = {
   age:20
};

const b = {
   age:30
};

console.log({
   ...a,  // 
   ...b   // {age : 30} last one wins (works only for property)
});

}





// PQ 2

{

const arr = [1,2];

console.log([
   ...arr,  
   ...arr   // combines the array [1,2,1,2]
]);

}




// PQ 3

{

const user = {
   name:"Ali",
   skills:["JS"]
};

const copy = {
   ...user
};

copy.skills.push("Node");

console.log(user.skills);  // ['JS','Node'] 

}




// PQ 4

{

const user = {
   profile:{
      city:"Delhi"
   }
};

const copy = {
   ...user
};

copy.profile.city = "Mumbai";

console.log(user.profile.city); // "Mumbai"
    
}




// PQ 5

{

const arr = [1,2];

const copy = [...arr];

copy.push(3);

console.log(arr); // [1,2,3]

}


// PQ 6

{

const obj = {
   age:20
};

const copy = {
   ...obj
};

copy.age = 50;

console.log(obj.age);

}




// PQ 7
// importanrt : it copies the front layer only not the arrays inside comapany so that node gets pushed and both cecomes ['JS', 'node']

{

const company = {
   employees:[
      {
         name:"A",
         skills:["JS"]
      }
   ]
};

const copy = {
   ...company
};

copy.employees[0].skills.push("Node");

console.log(company.employees[0].skills);
// ['JS','Node']
console.log(copy.employees[0].skills);
// ['JS','Node']
console.log(company === copy); 
// false

}





// PQ 8 

{

const user = {
   profile:{
      city:"Delhi"
   }
};

const copy = {
   ...user,
   profile:{
      ...user.profile
   }
};

copy.profile.city = "Mumbai";

console.log(user.profile.city); 
// Delhi because it copies even the city propertiy instead of only the front layer as previous question

// Mumbai if it doesn't copy the inner city property


}





// PQ 9

{

const user = {
   profile:{
      country:{
         code:"IN"
      }
   }
};

const copy = {
   ...user,
   profile:{
      ...user.profile,
      country:{
        ...user.profile.country,
        code:{
            ...user.profile.country.code
        }
      }
   }
};

copy.profile.country.code = "US";

console.log(user.profile.country.code);
// US
// IN 
// shallow copy
}








