// Need a class to manage, update, promote employee using prototype indider properties of object 

class Employee {

      constructor ( empName, empRole , empSalary ) {

          this.empName = empName,
          this.empRole = empRole,
          this.empSalary = empSalary

      }

      showdetails () {
        return `
             Name of Employee → ${this.empName}
             Role of Employee → ${this.empRole}
             Salary of Employee → ${this.empSalary}       
        `
      }

      promote (amount) {
        this.empSalary += amount;
        return `
            Congratulations ${this.empName} you are promoted.
        `
      }

      work (newRole) {
        this.empRole = newRole;
        return `
            ${this.empName} your role is changed to graphic designer.
        `
      }


}


const e1 = new Employee(
    "Bauaa", "Intern" , 4000
);

const e2 = new Employee(
    "Rishu", "Streamer" , 45000
);

console.log(e1.promote(50000))
console.log(e1.showdetails())

console.log(e2.work("Graphic Designer"))
console.log(e2.showdetails())




