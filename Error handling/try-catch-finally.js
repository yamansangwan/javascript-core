// Try and Catch with finally clause
// here try used to test the code 
// catch is used to give a temporary custom error

// syntax try {test code} -> Yes/No -> Yes -> catch (error) { console custom output (error handling)}

// script dies if (setTimeOut);

// when there is a retun in function "finally" is used to exceptionally execute the code inside teh finally clause


// try     → test code
// catch   → handle error
// finally → always execute



{

    let username = " ";

    try {
        console.log(userName)
    } catch (error) {
        console.error("Variable Missing");
    }

}




{

    // with finally
    // finally always runs

    let username = " ";

    try {
        console.log(userName)
    } catch (error) {
        console.error("Variable Missing");
    } finally {
        console.log("Execution Completed ")
    }

}






{

    const divide = (a, b) => {

        try {

            if (b === 0 || isNaN(b)) {
                throw Error("CAN NOT DIVIDE BY ZERO")
            }

            console.log(a / b);
        }

        catch (error) {
            console.log("Math Error")
        }

        finally {
            console.log("Execution Completed")
        }

    }

    divide(3, "s");

}



