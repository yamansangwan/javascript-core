// “immediately-invoked function expressions”  IIFE   (old techsss)

(
    function(){

    }
)();  // (); triggers IIfe function 


// variable declared inside IIfe is local cant be used outside 


(
    function(name){
        console.log(`my name is ${name}`)
    }
) ("HEHE");




// arrow + iife variation ::

(
    (name) => console.log(`my name is ${name}`)  
)  ("HEHE");