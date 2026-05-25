// destructuring, Spread, Rest Test


// Q1 Destructuring (Nested response)

// Given
{
const response = {
    status: 200,

    payload:{
        users:[
            {
                username:"neo",

                permissions:["read","write"],

                profile:{
                    country:{
                        name:"Japan",
                        code:"JP"
                    }
                }
            }
        ]
    }
};

// Required : 
// neo
// read
// Japan

// Answer 

const { status , payload: {users: [{username : un , permissions : [pm] , profile : {country : {name} } } ] } } = response;

console.log(un,pm,name);
}








// Q2 

// Given

{
const employee = {
    id:1,

    details:{
        department:"AI",

        salary:{
            current:5000
        }
    }
};


// have to create a copy with "7000" without mutating original "5000";

const copy = {
    ...employee,
    details: {
        ...employee.details,
        salary: {
            ...employee.details.salary
        }
    }
};

copy.details.salary.current = 7000;

console.log(employee.details.salary.current); // 5000
console.log(copy.details.salary.current); // 7000

}







// Q3 Rest

//Given

const logs = [
   "AUTH",
   "PAYMENT",
   "DELETE",
   "CREATE",
   "EXPORT"
];

// Need :
// firstAction
// remainingActions

const [ , ...safe] = logs;
console.log(safe);






// Q4 Mixed

// given
{

const account = {
   name:"Max",

   transactions:[
      100,
      50,
      -20
   ],

   settings:{
      premium:false
   }
};

// Need :

// {
//  name:"Max",

//  settings:{
//     premium:true
//  },

//  transactionCount:3
// }

// without mutating original



const { 
    ...account ,
    settings : {
        ...account.settings ,
        premium : {
            premium
        }
    }
 } = account;


}