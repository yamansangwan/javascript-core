// Prototype 
// understnading : toolbox


{


// Q1 

// function Student(){}
// this.study=
// function(){}

// convert it into prototype

function Student (name) {
    this.name = name
}

Student.prototype.study = function (){
    return `${this.name} is studying`
}

const s1 = new Student ("abc")

console.log(s1.study());


}




{

// Q2 

// animal needs eat()

function animal ( animalName ) {
    this.animalName = animalName
}

animal.prototype.eat = function () {
    return `${this.animalName} is eating`
}

const a1 = new animal("cat")

console.log(a1.eat());


}





{

// Q3

// back account need deposit and withdrawal

function bankAccount ( customerName , accBalance ) {

    this.customerName = customerName,
    this.accBalance = accBalance

}

bankAccount.prototype.deposit = function () {
    return `${this.accBalance - 50} remaining out of ${this.accBalance}`
}

bankAccount.prototype.withdrawal = function() {
    return `${this.accBalance + 50} is your current balance`
}

const c1 = new bankAccount("abc" , 5000)
const c2 = new bankAccount("bcc" , 6000)

console.log(c1.deposit());
console.log(c2.withdrawal());


}