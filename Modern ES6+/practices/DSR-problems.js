{

// Q1 Destructuring 
// extract movie name

const movie = {
   title:"Inception",
   year:2010
};

const { title } = movie;
console.log(title);


}


{

// Q2 Rest
// Remove password

const user = {
   id:1,
   password:"123",
   city:"Delhi"
};

const {password , ...safeInfo} = user
console.log(safeInfo);

}


{

// Q3 Spread
// add actice status

const profile = {
   username:"neo"
};

const copyprofile = {
    ...profile,
    active: true
}
console.log(copyprofile);

}



{

// Q4 array spread
// spread and add "write" in array

const roles = [
   "read"
];

const copyRoles = [
    ...roles,
    "write"
]
console.log(copyRoles);


}



// _____ Round 2 _______

{

// Q5 Need : remove password & update salary

const employee = {
   id:1,
   salary:5000,
   password:"abc"
};

const { password , ...safeInfo } = employee;

const copyEmployee = {
    ...safeInfo,
    salary : 7000
}

console.log(copyEmployee);

}



{

// Q6 No mutation 
// theme -> light 
// alerts : true

const settings = {
   theme:"dark",
   alerts:true
};

const copySettings = {
    ...settings,
    theme: "light"
}

console.log(copySettings);

}





{

// Q7 multiple objects operations
// remove password from all
// think -> same operation on all?

const users = [
 {
   name:" abc ",
   password:"123"
 },

 {
   name:"bob ",
   password:"456"
 }
];

const mappedUsers = users.map(
    (item) => {
        const {
            password,
            ...safeInfo
        } = item;

        return safeInfo;
    }
)

console.log(mappedUsers);
 
}






// ______ Round 3  _______

{

// Q8 hard -> Nested updates
// Need :
// {
//  settings:{
//     theme:"light",
//     sound:true
//  }
// }

const app = {

 settings:{
    theme:"dark",
    sound:true
 }
};

const copyApp = {
    ...app,
    settings : {
        ...app.settings,
        theme : "light",
        sound : true
    }

}

console.log(app);
console.log(copyApp);


}





{

// Q9 Nested + Array combinations
// Need :
// {
//  permissions:[
//     "read",
//     "write"
//  ],

//  settings:{
//     mode:"light"
//  }
// }

const admin = {

 permissions:[
    "read"
 ],

 settings:{
    mode:"dark"
 }
};

const copyAdmin = {
    ...admin,
    permissions : [
        ...admin.permissions,
        "write"
    ],
    settings:{
        ...admin.settings,
        mode: "light"
    }
}

console.log(copyAdmin);


}




{

// Q10 thinking case study 

// const users = [...]

// same operation for all? -> map() to transform
// remove? -> rest parameters
// update? -> copy object + spread
// nested? -> destructuring + spread
// array? -> [ ] + destructuring

}

