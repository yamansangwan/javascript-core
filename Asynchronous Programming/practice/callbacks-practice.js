// prediction and adta flow questions on callbacks

{

// Q1 

function login(callback){
   console.log("Checking user...");
   callback();
}

function dashboard(){
   console.log("Dashboard opened");
}
login(dashboard);

// checking user... -> Dashboard opened
// call back tends to accept dasboard() as argument
// dashboard() is callback function


// dashboard = pass function
// dashboard() = run function immediately

}

// q2


{

function login(callback){
   console.log("Checking user");
   callback("ABC");
}

function dashboard(username){
   console.log(
      `Welcome ${username}`
   );
}

login(dashboard);

// 1. Checking User
// 2. callback = dashboard
// 3. dashboard("ABC")
// 4. Welcome ABC


}


{

// fake async callback traps

function login(callback){

   console.log("Checking user...");

   setTimeout(() => {
      console.log("User verified");
      callback("ABC");
   },2000);

}

function dashboard(username){

   console.log(
      `Welcome ${username}`
   );

}

login(dashboard);
console.log("Program End");

// 1. Checking User...
// 2. callback = dashboard
// 3. skipping the Async code
// 4. Program End
// 5. User Verified 
// 6. Welcome ABC  

}