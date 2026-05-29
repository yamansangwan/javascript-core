{

// we are writing async code

// whenever we are using 

// sends request ::
// fetch 
// axios
// promises
// setTimeout
// setinterval

// when completes ::
// then , catch 
// callbacks
// async , await


}



{

// callbacks

// callback is always a function 
// when aync code gets completion

setTimeout(() => {
    console.log("this is a callback")
}, 10000);

}


{

setTimeout(() => {
    fetch("https://www.google.com")
}, 5000);

}



{

// request and fetch confusion 

//here fetch sends a request 
var a =  fetch("https://www.google.com");
console.log(a); // sync code

// doesn't evn gets the reponse and gets prints before getting a response 


}


