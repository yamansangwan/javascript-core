// Super Hard Challenge: The Secure ATM (Closures & Scope)
// The Business Requirement: The bank's current code is insecure because the user's account balance and PIN number are floating in the global scope where hackers can change them. You need to build a secure vault using a Closure.

// The Rules:

// Build an ATM factory. When a user creates an account, they must provide a setupPin and a startingBalance. These values must be trapped inside the local scope.

// The factory must return a new tool (the ATM keypad).

// The keypad tool needs to accept two parameters: enteredPin and withdrawAmount.

// The Keypad Logic:

// If the enteredPin does not match the setupPin, return "Access Denied: Invalid PIN".

// If the withdrawAmount is greater than their current balance, return "Transaction Failed: Insufficient Funds".

// If the PIN is correct and they have enough money, subtract the money from their balance, and return "Success! Withdrew $[amount]. New balance is $[balance].".


// simplified steps as i can think is ::

//1. account balance and PIN should be in a backpack for security.

//2. function ATM FACTORY - setupPIN , startingBalance.

//3. ATM FACTORY returns function ATM keypad.

//4. ATM keypad - enterdPIN and WithdrawAmount.

//5. keypad logic : wrong pin - failed and right pin - successfull(if enought amount in balance).

const atmFactory = (setupPin,startingBalance) => {
         let accountBalance = startingBalance;
         const accountPin = setupPin;
         return atmKeypad = (enteredPin, withdrawAmount) => {
              if (enteredPin !== accountPin) {
                return `Access Denied: Invalid PIN`;
              }
              else if (withdrawAmount > accountBalance) {
                return `Transaction Failed: Insufficient Funds`
              }
              else {
                accountBalance = accountBalance - withdrawAmount;
                return `Success! Withdrew $ ${withdrawAmount}. New balance is $${accountBalance}`
              }
         };
};

const myTransaction = atmFactory(1111,50000);
console.log(myTransaction(0000, 100)); 
console.log(myTransaction(1234, 1000)); 
console.log(myTransaction(1111, 100)); 
console.log(myTransaction(1111, 50));
console.log(myTransaction(1234, 1000)); 
console.log(myTransaction(1111, 40000));






