// using forEach , map , filter , reduce
// have to remove negative temperature from readings to prevent errors
// 1. remomve the errors
// 2. calibrate using valid numbers

const sensorReadings = [5, -12, 8, -99, 3];
const fR = sensorReadings.filter(
    item => item > 0
)
const mR = fR.map(
    item => item * 10
)
console.log(mR);


