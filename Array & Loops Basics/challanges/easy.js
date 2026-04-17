// // The Inventory Manager (Array Methods)
// The Business Requirement: A warehouse receives shipments at the loading dock and ships out orders from the front door. We need to track the inventory using an array as a queue.
// The Starting Data: let warehouse = ["Laptops", "Keyboards", "Monitors"];

// Your Task:

// A new shipment of "Mice" just arrived. Add it to the end of the array.

// A VIP customer returned a "Webcam". We need to process it immediately, so add it to the beginning of the array.

// An order just shipped out the front door! Remove the first item from the array.

// The warehouse manager decided the last item in the array is defective. Remove the last item from the array.

// console.log the final warehouse array. (It should print: ['Keyboards', 'Monitors'])

let warehouse = ["Laptops", "Keyboards", "Monitors"];

// Mouse in the end of array.
warehouse.push("Mouse");
// VIP item Webcam in first.
warehouse.unshift("Webcam");
// shipping the 1st item.
warehouse.shift();
// defective item shit.
warehouse.pop();
console.log(warehouse);

















