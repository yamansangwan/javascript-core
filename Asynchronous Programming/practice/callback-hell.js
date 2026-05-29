// callback hell traps and questions
// prediction questions 
// promises were created to prevent callback hell

{

// q1 

function login(callback){

   setTimeout(() => {
      console.log("User Logged In");
      callback();
   },1000);

}

function fetchProfile(callback){

   setTimeout(() => {
      console.log("Profile Fetched");
      callback();
   },1000);

}

function fetchPosts(){

   setTimeout(() => {
      console.log("Posts Loaded");
   },1000);

}

login(() => {
    return fetchProfile(() => fetchPosts() )
});


}




{

// Q - flow only 

function step1(callback){
   console.log("Step 1");
   callback();
}

function step2(){
   console.log("Step 2");
}

step1(step2);


// callback = step2
// "Step 1" + step2()
// "Step 2"

}




{

// Q complete the puzzle

function step1(callback){
   console.log("A");
   callback();

}

function step2(callback){
   console.log("B");
   callback();

}

function step3(){
   console.log("C");
}

step1(() => step2(() => step3()))

}







{

// q - need : login , profile , posts

function login(callback){
   console.log("Login");
   callback();

}

function profile(callback){
   console.log("Profile");
   callback();

}

function posts(){
   console.log("Posts");
}


login(() => profile( () => posts() ) )


}







{

    // q

//     login(profile);

//     console.log("End");

function login(callback){
   setTimeout(() => {
      console.log("Login");
      callback();
   },1000);

}

function profile(){
   console.log("Profile");
}

login(profile);
console.log("End");

// 'End'
// "Login"
// "Profile"

}






{

// Q need : Order Placed , Payment Done , Delivered

function order(callback){

   setTimeout(() => {
      console.log("Order Placed")
      callback();
   },1000);

}

function payment(callback){

   setTimeout(() => {
      console.log("Payment Done");
      callback();
   },1000);

}

function delivery(){
   console.log("Delivered");
}

order ( () => payment( () => delivery() ) )

}