// CONSTRUCTORS

{

// Q1

// student constructor contains :
// name , grade

// objects : s1,s2,s3/

function studentCons ( name , grade ) {
    this.name = name,
    this.grade = grade
}

const s1 = new studentCons("a","A+")
const s2 = new studentCons("b","A+")
const s3 = new studentCons("c","A+")

console.log(s1,s2,s3);

}





{

// Q2

// Employee constructor
// contains :
// name
// salary

// need : 3 employees


function employeeCons( name , salary ){
        this.name = name,
        this.salary = salary
}

const e1 = new employeeCons("a",900000)
const e2 = new employeeCons("b",2000000)
const e3 = new employeeCons("c",3000000)

console.log(e1.salary , e2.name , e3.name);


}