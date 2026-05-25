// This File contains variation practices of D-S-R
// to cover up the confusion and diffrence 


// DESTRUCTURE → take

// REST → take + collect

// SPREAD → rebuild


// REST → remove
// SPREAD → copy
// NESTED SPREAD → update
// ARRAY SPREAD → append


// UPDATING NESTED OBJECTS:

// {
//    ...obj,
//    nested:{
//       ...obj.nested,
//       changed:value
//    }
// }
// destructure basic 


// UPDATING NESTED ARRAY

// {
//    ...obj,
//    arr:[
//       ...obj.arr,
//       newItem
//    ]
// }

{

const user = {
   age:21
};
const {age} = user;

console.log(age);

}



// spread bsic

{

const user = {
   age:21
};

const updatedUser = {
    ...user,
    active:true
}

console.log(updatedUser)

}



// Rest basic

{

const user = {
 name:"abc",
 age:21,
 city:"Delhi"
}

const {...all} = user;
console.log(all);



// another one

const product = {
   id:1,
   price:100,
   stock:5
};

const { id , ...details } = product;
console.log(id , details)

}






// mixing 2 concepts
{

const user = {
   name:"abc",
   age:21,
   city:"Delhi"
};

// output should be 

// {
//  age:21,
//  city:"Delhi",
//  active:true
// }

const { name , ...remains } = user;

const copyUser = {
   ...remains , active : true
}

console.log(copyUser);

}





// DSR

{

const employee = {
   id:1,
   name:"Sara",
   salary:5000,
   department:"AI"
};

// Need : 
// {
//    id:1,
//    department:"AI",
//    salary:7000,
//    active:true
// }

// Remove -> name
// update slaray -> 7000
// add -> active:true

const { id , name , department , salary } = employee;

const copyEmployee = {
      id,
      department,
      salary,
      active : true

}

copyEmployee.salary = 7000;

console.log(copyEmployee)


}






// user sanitizer API

{

const user = {
   id:1,
   username:"neo",
   password:"123",
   token:"abc"
};

//need

// {
//    id:1,
//    username:"neo"
// }

const { id , username , ...remains } = user;

const copyUser = {
   id,
   username
}

console.log(copyUser)

}





// Update Profile

{

const profile = {
   name:"Ali",

   settings:{
      theme:"dark",
      notifications:true
   }
};

// Nedd

// {
//    name:"Ali",

//    settings:{
//       theme:"light",
//       notifications:true
//    }
// }

const { name , settings} = profile;

const copyProfile = {
   name,
   settings : {
      theme : "light",
   }
   // settings:{
   //    ...profile.settings,
   //    theme:"light"
   // }
}

console.log(copyProfile);




}




// Permisiion Upgrade

{

const session = {
   user:"Sara",

   permissions:[
      "read",
      "write"
   ]
};


// Needd

// {
//  user:"Sara",

//  permissions:[
//     "read",
//     "write",
//     "delete"
//  ]
// }


const { user , ...permissions } = session;

const updatedSession = {
   user,
   ...permissions,
   // permissions : 'true'
}

// shallow copy trap here (original is mutated)
updatedSession.permissions.push('true');

console.log(updatedSession);


}




// mixed (backend use)

{

const employee = {
   id:1,
   salary:5000,
   city:"Delhi",
   password:"secret"
};

// Nedd

// {
//  id:1,
//  city:"Delhi",
//  salary:7000,
//  active:true
// }


// flow :
// destructuring to extract values first 
// password sepetate and remaining in ...remians using rest
// making a copy using spread and sumping the required needs 

const { password , ...remains } = employee;

const copyEmployee = {
   ...remains,
   salary : 7000,
   active : true
}

console.log(employee);
console.log(copyEmployee);


}




// Weak Points Targetter

// removing property → REST
// updating nested object → nested SPREAD
// appending to array → array SPREAD
// avoiding mutation → build final state

{

const admin = {
   username:"root",

   settings:{
      mode:"dark",
      alerts:true
   },

   permissions:[
      "read"
   ],

   password:"123"
};

// Need ::

// {
//  username:"root",

//  settings:{
//     mode:"light",
//     alerts:true
//  },

//  permissions:[
//     "read",
//     "write"
//  ]
// }

// rest to remove password
const { password , ...remains } = admin;

const updatedAdmin = {
   ...remains,
       settings : {
         ...remains.settings,
         mode : "light"
       },
       permissions : [
          ...remains.permissions,
         'write'
       ]
            
}


console.log(admin);
console.log(updatedAdmin);

}
