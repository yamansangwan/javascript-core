// promises
// solves the callback hell 
// promise -> resolved or rejected 

// resolve -> success
// reject -> failure
// .then() -> what to do on success
// .catch() -> what to do on failure 


{

// q resolve 

const promise = new Promise(
   (resolve,reject) => {
      resolve("Success");
   }
);

// here is response recieved resolve function will be executed

}


{

// q using "then" 

const expPromise = new Promise(
    (res , rej) => {
        res("User Found") 
    }
)

expPromise.then(
    (data) => {
        console.log(data)
    }
)

}




{

// q using "catch"

const expPromise = new Promise(
    (res , rej) => {
        rej("User Not Found") 
    }
)

expPromise.catch(
    (data) => {
        console.log(data)
    }
)

}




{

// q resolve vs reject  prediction 

const loginPromise = new Promise(

   (resolve,reject) => {

      const isUserFound = true;
      if(isUserFound){
         resolve("Login Success");
      }
      else{

         reject("Login Failed");
      }
   }
);


loginPromise
.then((data) => {
   console.log(data);
})
.catch((error) => {
   console.log(error);
});

// login success because resolve executes as if(true)

}






{

// q - fake async promise    

const loginPromise = new Promise(

   (resolve,reject) => {

      setTimeout(() => {
         resolve("User Verified");
      },2000);
   }

);

loginPromise.then(
    (data) => console.log(data)
)

}





{

// q - promise chain 

function login(){
      const loginPromise = new Promise (
        (res,rej) => {
            res("Login Success")
        }
      )
      return loginPromise;
}

function profile(){
       const profilePromise = new Promise (
        (res,rej) => {
            res("Profile Loaded")
        }
      )
      return profilePromise;
}

function posts(){
       const postsPromise = new Promise (
        (res,rej) => {
            res("Posts Loaded")
        }
      )
      return postsPromise

}

// login()
// .then(() => profile())
// .then(() => posts())
// .then((data) => console.log(data))

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







{

// user login system 

// Login User -> Load Profile -> Load Posts -> Show Dashboard

const login = () => {
    const loginPromise = new Promise (
        (res,rej) => {
            if (res) {
                res("Logged In")
            }
            else {
                rej("User Not Found")
            }
        }
    )
    return loginPromise;
}

const profile = () => {
    const profilePromise = new Promise (
        (res, rej) => {
            res("Profile Loaded Successfully")
        }
    )
    return profilePromise;
}

const posts = () => {
    const postsPromise = new Promise (
        (res,rej) => {
            res("Posts Loaded 100%")
        }
    )
    return postsPromise;
}

const dashboard = () => {
    const dashboardPromise = new Promise (
        (res, rej) => {
            res("DashBoard Opened")
        }
    )
    return dashboardPromise;
}

login()
.then((data) => { console.log(data) 
    return profile()
 })
 .then((data) => { console.log(data)
    return posts()
  })
  .then((data) => { console.log(data) 
    return dashboard()
   })
   .then((data) => console.log(data) )
   .catch((data) => console.log(data))

}