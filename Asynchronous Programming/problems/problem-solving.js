// Practice Problems

// q1 What problem does a constructor solve?

// ans - contructor is a function which gets called in milliseconds whenever class is called to prevent writting same this.name = name; everytime, it replaces object allocation each time to "new" keyword which can be used to create new object which gets sent to constructor each time to save memory.
// brain condition : forgot a little bit 


// q2 What is the difference between a method and a normal function?

// function have types and cab be written using function keyword and arrow function but methods are inside class a function inside class is mehods which performs a perticular task 



// q3 Why was Prototype introduced?

// Prototype is a property of an object in JS , prototype can be accessed using .propotype keyword or prototype can be executed as a function / task when there is a data loss condition
// brain condition : forgot a bit  


// q4

// call() - calls a function immediately, tells direction to this
// apply() - calls a function immediately, same as call but takes [] array as a input
// bind() - returns a function for future use

// brain condition : forgot all


// q5 What is Callback Hell? & Why were Promises introduced?

// ans - callback hell is having larger users and callbacking same function for 1000 users by writting callbacks again and again like login(()=>password(()=>.....))

// promises was introduced to solve callback hell using ( response and reject ) two main states using then and catch


// q6 resolve () vs reject()

// ans - resolve() -> runs when response is there or succesfull , catch () -> runs when response is not there and unsuccessfull, can be syntaxed as .then(..).catch(...)  , both are the part of promises


// q7 .then() and .catch()

// ans - .then() conatins some action gets executed is response() is sucessfull, .catch() executes if reject() is executed


// q8 async function test(){}

// ans - async and await way invented to remove .then and .catch but they work like and on promises, its like a new way of writing promises , promises are async code , so the function besides it can use a async to replace .then and .catch so we dont have to do nested calling


// q9 promise chaining and async/await

// ans - promise chaing -> when we call promises using .then() , .catch() it becomes a chain of promises nested calling of promises , seems like a tree or chain , have to call each function a s a callback conatining promises , async / await -> these ar introduced to solve promise chaining and using await instead of .the , .catch it works same but uses await


// q10 - try , catch , finally , throw

// ans - try -> when response() is called
// catch -> when reject() is called
// finally -> it gets executed anyway at the end(used with try , catch error handling)
// throw -> used to throw an error 





// Section 2

// q 11
{

console.log("A");

setTimeout(() => {
   console.log("B");
},0);

console.log("C");

// 1. "A"
// 2. "C"
// 3. "B" -> async executed at last after sync code

}


// q 12
{

function login(callback){
   console.log("Login");
   callback();
}

function dashboard(){
   console.log("Dashboard");
}

login(dashboard);

// 1. login(dashboard)
// 2. "Login"
// 3. "Dashboard" 

}


// q 13

{

const promise =
new Promise((resolve) => {

   resolve("Success");

});

promise.then(
   (data) => {
      console.log(data);
   }
);

console.log("End");

// 1. "End"
// 2. "Success" -> promsie is async code

}


// q 14

{

async function test(){
   return "Hello";
}

test()
.then((data) => {
   console.log(data);
});

console.log("Done");

// 1. "Done"
// 2. i think it needs await instead of then and catch 
// 3. but it works as promises 
// 4. confuse + i dont know 

}



// q 15
{

login()
.then(() => profile())
.then(() => posts())

// 1. login(callback) -> then response
// 2. callback is profile(callback) -> then response
// 3. callback is posts() -> then response

}







// Section 3

// q16

{

const user = {
   id:1,
   city:"Delhi",
   password:"123"
};

// complete

const { password , ...safeInfo } = user;
console.log(safeInfo);

}     



// q 17

{

const settings = {
   theme:"dark",
   alerts:true
};

// complete

const updatedSettings = {
    ...settings,
    theme : "light"
}

console.log(updatedSettings);


}




// q 18

{

class Employee {
   constructor(name,salary){
    this.name = name,
    this.salary = salary
   }
   show(){
      return `${this.name} ${this.salary}`;
   }
}

const e1 = new Employee("abc" , 1000);
console.log(e1.show())

}



// q 20 then to async await

{

// login()
// .then(() => profile())
// .then(() => posts())

await(login(
    await profile(
        await posts()
    )
))

// I dont know to be honest

}






// section 4 


// 21
{

function divide(a,b){
    try {       
        if(b === 0 || isNaN(b)) {
            throw ("ERRORRRRRRRRR")
        }
        console.log (a/b);
    } catch {
        console.log("MATH ERROR")
    } finally {
        console.log("DONE");
        
    }
}

divide(2,0);

}




// q - 22

{

class User {

   constructor(name , role) {
    this.name = name,
    this.role = role
   }
   
   login(){
     return `${this.name} is logged in`
   }

   logout(){
     return `${this.name} is logged out`
   }
}

const u1 = new User("a")
const u2 = new User("b")
console.log(u1.login());
console.log(u2.logout());



}




// q 23

{

const fetchProfile = new Promise(
    (res,rej) => {
         res(
            setTimeout(
        () => console.log("Profile Loaded") , 1000
        
    )
         )
    }
   
)

fetchProfile
.then()

}




// Section 5 

// q 24 
// remove password
// trim username
// add active:true

{

const user = {
   id:1,
   username:" abc ",
   password:"123"
};

const { password , ...safeInfo } = user;

const copyUser = {
         ...safeInfo,
         username : safeInfo.username.trim(),
         active : true
               
}

console.log(copyUser);


}




// q 25

// Login Success
// Profile Loaded
// Posts Loaded

{

const login = () =>{
    const loginPromise = new Promise (
        (res , rej) => {
            res(" Login Success ")
        }
    )
    return loginPromise;
}

const profile = () =>{
    const profilePromise = new Promise (
        (res , rej) => {
            res(" Profile Loaded ")
        }
    )
    return profilePromise;
}

const posts = () =>{
    const postsPromise = new Promise (
        (res , rej) => {
            res(" Posts Loaded ")
        }
    )
    return postsPromise;
}


// fucked up here i dont remember anything just confusuion i think i was cramming taht shii up
// but have to call each fucntion becaus e there is no call back + have to log the data from promises + then to collect the response + have to make chain so calling function with . then()

login()
  .then((data) => {
    console.log(data);
    return profile();
  })
  .then((data) => {
    console.log(data);
    return posts();
  })
  .then((data) => {
    console.log(data);
  });


}





// q 26

{

// turning it into async await 


const login = async () =>{
    const loginPromise = new Promise (
        (res , rej) => {
            res(" Login Success ")
        }
    )
    return loginPromise;
}

const profile = async () =>{
    const profilePromise = new Promise (
        (res , rej) => {
            res(" Profile Loaded ")
        }
    )
    return profilePromise;
}

const posts = async () =>{
    const postsPromise = new Promise (
        (res , rej) => {
            res(" Posts Loaded ")
        }
    )
    return postsPromise;
}

// i havent done it properly i dk 

login()
  await (profile())
   await (posts())



}




