// try
// catch
// finally
// throw



// Output ?

{

try{
   console.log("A");
   throw new Error("Boom");
   console.log("B");
}

catch(error){
   console.log("C");
}

finally{
   console.log("D");
}

// 1. try wil run code inside { }
// 2. "A"
// 3. error "Boom" leads to catch
// 4. "C"
// 5. finally will laways run 
// 6. "D"

}




// ATM withdrawal 

// If amount <= 0
// throw custom error
// catch error
// finally print: Transaction Finished

{

function withdrawal(amount) {

    try {
        
        if (amount <= 0){
            throw new Error("VERY SMALL AMOUNT")
        }
        else {
            console.log(`${amount} debited collect the cash`)
        }
    }
    
    catch(er) {
        console.log(er.message);
        
          
    }

    finally {
        console.log("Transaction Completed, Collect your card");
        
    }
}

withdrawal(500);
withdrawal(-500)

}