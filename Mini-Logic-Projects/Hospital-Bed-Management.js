// patients arrives 
// In ambulance
// hospital have limited beds
// give priority to heart attack patients
// give least priotity to small injuries direct them to pharmacy
// requires final patients list asording to priority and order.





const checkBeds = () => {
        
        let avaBeds = 4;
        let opdPatient = [];

        return (ic) => {
            for (let i = 0 ; i < ic.length ; i++){
                if ( ic[i] == "splinter" || ic[i] === "weakness") {
                    console.log(`You Should Go Towards - Pharmacy for ${ic[i]}`)
                    continue;
                }
                else if (avaBeds <= 0) {
                    console.log("Sorry No Beds Available Right Now !!! ~  Wait Till Bed is Free")
                    break;
                }
                else if (ic[i]  === "heart attack") {
                    opdPatient.unshift(ic[i]);
                    avaBeds --; // will use bed first.
                }
                else {
                    avaBeds --;
                    opdPatient.push(ic[i]);
                }
            }
            return `People present in ER related : \n${opdPatient}`;
        }
}

const ambulanceArr = ["broken arm", "splinter", "heart attack", "fever", "weakness"];
const needBeds = checkBeds();
console.log(needBeds(ambulanceArr));



