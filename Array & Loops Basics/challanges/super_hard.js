// The Data Extractor (Reverse Array Processing)
// The Business Requirement: A drone recorded altitude data, but a glitch caused it to log the data backward. You need to pull the data out of the array from the end, process it, and print it, until the array is completely empty.
// The Starting Data: const droneAltitudes = [400, 350, 300, 250];

// Your Task:

// Write a while loop that runs as long as droneAltitudes.length > 0 (meaning, while the array is not empty).

// Inside the loop, use .pop() to extract the last number from the array and save it into a variable called currentAltitude.

// If currentAltitude is greater than 300, print "High Altitude: [number]". Otherwise, print "Low Altitude: [number]".


const droneAltitudes = [400, 350, 300, 250];
while (droneAltitudes.length > 0 ){
    let extractedAlt = droneAltitudes.pop();
    if (extractedAlt >= 300) console.log ("High Altitude " , extractedAlt);
    else {
        console.log("low altitude ", extractedAlt)
    }
}























