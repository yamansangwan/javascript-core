// create classes from prototype + methods + constructor

{

// make a class containing :

// Car class
// brand
// drive()

class car {

    constructor(client,model,brand) {
           this.client = client,
           this.model = model,
           this.brand = brand
    }

    drive () {
        return `hii! ${this.client}, You are driving ${this.model} car from ${this.brand} brand.`
    }

}

const c1 = new car("abc" , "i10" , " hyundai")
const c2 = new car("bcc", "civic" , "honda")

console.log(c1);
console.log(c2);

console.log(c2.drive());
console.log(c1.drive());




}





{

// Q2

// User class

// login()

// logout()

class User {

    constructor(name) {
        this.name = name
    }

    login () {
        return `${this.name} you are logged in`
    }

    logout () {
        return `${this.name} you are logged out`

    }
}

const c1 = new User("abc")
const c2 = new User("xyz")

console.log(c1.logout())
console.log(c2.login());


}
