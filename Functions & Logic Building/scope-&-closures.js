// scope and closures 
// used for security and memory.

// generally puts API keys and passwords in "function scope" because it can be accessed inside teh function only. not from outside

// scope - local and global scope.
// function can look out and see/access the hallway(global scope).
// but global(hallway) cant see/access the hallway(local/function scope).


const globalScope = "i'm global scope ";
const localFuncScope = () => {
    const localVar = " I'm inside local scope";
    return localVar + `&` +globalScope;
}
console.log(localFuncScope()); // returns both local and global.
console.log(globalScope + ` ` + localVar);
// error because localVar works as a function scope variable.





// closured create/returns functions so that they don't die after the outer function dies.
// basically the function which is returned have a backpack which can be used to store info while the outer function is dead from the memory.

// closured used to create private DATA


const outerFunction = () => {
    let balance = 100;
    return () => {
          balance = balance - 20;
          console.log (`$` + balance);
    };
}
const checkbalance = outerFunction();
checkbalance();
checkbalance();

// outer function is getting killed but inner function can still access the variable balance and its hidden from the server after execution we have to access inner function to access balance after that.  





