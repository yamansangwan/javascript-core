// Freelance Management System

// Features :
// Store freelancers
// Track skills
// Promote freelancers
// Activate/Deactivate freelancers
// Load freelancer data
// Handle errors
// Generate reports



// Requirement 1
// class which will able us to create multiple objects 

class Freelancer {

    constructor (id , name , skill , hourlyRate , active) {
        this.id = id,
        this.name = name,
        this.skill = skill,
        this.hourlyRate = hourlyRate,
        this.active = active
    }

    showDetails() {
        return `
        ID : ${this.id} \n 
        Name : ${this.name} \n
        Skill : ${this.skill} \n
        Hour_Rate : ${this.hourlyRate} \n
        Active_Status : ${this.active} \n        `
    }

    requestRateIncrease(newRate) {

        try {
            if (newRate <= 0 || newRate > 30) {
                throw new Error("Invalid Numbers")
            }
            else {
                this.hourlyRate += newRate
                return `Rate updated successfully to ${this.hourlyRate}`
            }
        }

        catch (Error) { return "Invalid Shiit" }

        finally { console.log("Request Closed") }
    }

}



const f1 = new Freelancer(101 ,"Bauaa" , "Graphic Designer" , 5, true)
const f2 = new Freelancer(150 ,"Rishu" , "Streamer" , 15 , false)
console.log(f1.requestRateIncrease(50));

// Requirement 2 - (storage)
// managing many freelancers 

const freelancerData = [f1,f2];
// console.log(freelancerData);

const totalFreelancer = freelancerData.length;

const freelancerNames = freelancerData.map(
    (item) => item.name
)

const activeFreelancers = freelancerData.filter(
    (item) => item.active === true
).map(
    (item) => item.name
)

const findFreelancer = freelancerData.find(
    (item) => item.id === 101
)

const found = findFreelancer.name;



// Requirement 3 - (Updation)

// promotion - new skill , new rate

const promotion = (newSkill,newRate) => {
    
     const updatedFreelancer = {
        ...findFreelancer,
        skill : newSkill,
        hourlyRate : newRate
     }

    //  console.log(updatedFreelancer);

     const { hourlyRate, ...safeInfo } = updatedFreelancer;
     console.log(safeInfo);
}

promotion("python" , 5000)





// Requirement 5 & 6

function loadFreelancer() {
        const loadPromise = new Promise(
            (res,rej) => {
                 setTimeout (() => { res("Freelancers Loaded") } , 4000 ); }
                 
        )
        return loadPromise;
    }

function loadProjects(){
    const projectPromise = new Promise(
            (res,rej) => {
                 setTimeout (() => { res("Projects  Loaded") } , 1000 ); }
                 
        )
        return projectPromise;
}

function loadPayments(){
        const paymentPromise = new Promise(
            (res,rej) => {
                 setTimeout (() => { res("Payment Logs Loaded") } , 2000 ); }
                 
        )
        return paymentPromise;
}

async function generateReport() {

    const start = await loadFreelancer();
    console.log(start)
    const project = await loadProjects();
    console.log(project)
    const payment = await loadPayments();
    console.log(payment)

    console.log("SYSTEM IS READY")
    console.log(`Details of People Working With Us :\n${freelancerNames}`)


}

generateReport();

