// Need to make a single box

{

// Q1 

// movie contains : 
// title
// year
// watch()


const movie = {
    title : "inception",
    year : 2016,
    watch(){ return `${this.title} watched`}
}

console.log(movie.watch());


}




{

// Q2

// bank account contains :

// owner
// balance
// show()

const bankAccount = {
    owner : "abc",
    balance : 4564784,
    show(){ return `${this.owner} have ${this.balance} balance` }
}

console.log(bankAccount);
console.log(bankAccount.show());


}

