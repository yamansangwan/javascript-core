// The VIP Bouncer (Classic for loop & continue)
// The Business Requirement: A nightclub uses an automated scanner to check ages in the line. We have a list of ages. The system needs to admit people 18 or older into a new VIP list, but strictly ignore anyone underage.
// The Starting Data: const lineAges = [16, 21, 17, 25, 15, 30];

// Your Task:

// Create an empty array called admittedGuests = [].

// Write a classic for loop. It should start at let i = 0;, run as long as i < lineAges.length, and step by i++.

// Inside the loop, check the current age using lineAges[i].

// The Logic: If the age is less than 18, print "Access Denied" and use the continue keyword to skip immediately to the next person.

// If they are 18 or older, use .push() to add their age to the admittedGuests array.

// Outside the loop, console.log the admittedGuests array.


const lineAges = [16, 21, 17, 25, 15, 30];
let vipArr = [];
for (i = 0 ; i < lineAges.length ; i++){
        if (lineAges[i] < 18){
            console.log("access denied bih" , lineAges[i]);
            continue;
        }
        else {
            vipArr.push(lineAges[i]);
        }
}
console.log(vipArr);


















