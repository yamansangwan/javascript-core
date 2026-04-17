// // The Sensor Calibrator (while loop)
// The Business Requirement: A factory robot has a temperature sensor. We need to run a calibration cycle that counts down from 5 to 1.

// Your Task:

// Create a variable let cycleCount = 5;.

// Write a while loop that runs as long as cycleCount is greater than 0.

// Inside the loop, console.log the text: "Running calibration cycle: [cycleCount]".

// After logging, decrease the cycleCount by 1.

// Outside the loop, print "Calibration complete." once the loop finishes.


var cycleCount = 5;
do {
    cycleCount -= 1;
    console.log( " calibrating " , cycleCount)
} while (cycleCount >= 1){
    console.log("calibration completed")
}




















