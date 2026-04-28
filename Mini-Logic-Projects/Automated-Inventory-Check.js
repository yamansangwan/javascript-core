// to check understanding of basic topics covered till now.
// robotic barista.
// have to remove - whitespaces , un orderedly capital letters , trolls.
// limited cups inside.

// 1. have to clear the data.
// 2. filter the bad orders.
// 3. serve if order is fine.
// 4. track inventory / stock in the robot.


// + adding closure to make it a bit secure

const inventoryStock = ["coffee", "tea", "water" , "latte" , "espresso"];

const powerOn = () =>{
    let realOrders = []; 
    let cups = 3;
    return (inOrders) => {
        for (let i = 0 ; i < inOrders.length ; i++){
               let itemSelected = inOrders[i].trim().toLowerCase();
                    if(cups <= 0){
                    console.log(`0 CUPS LEFT - YOU CAN't ORDER ${itemSelected}`);
                    break;
               }
               else if (!inventoryStock.includes(itemSelected)){
                  console.log(` ITEM NOT IN STOCK ~ ${itemSelected}`);
               }
          
               else {
                realOrders.push(itemSelected);
                cups = cups - 1;
               }
            
       }
       return realOrders;
}
     
    }
     let processOrders = powerOn();
    console.log(processOrders(["  COFFEE  ", "Tea", "  pOiSoN ", "water", "Espresso", "Latte"]));// MISTAKE 1 :::




























































































    // all logics just fumbled up working but its not optimised and used in a correct way.


// const inventoryStock = ["coffee", "tea", "water" , "latte" , "espresso"];

// // what people ordered as an array
// const ordersRecieved = ["  COFFEE  ", "Tea", "  pOiSoN ", "water", "Espresso", "Latte"];

// let realOrders = []; 
// let cups = 3;
// const powerOn = () =>{
//     if (cups > 0) {
//         for (let i = 0 ; i < ordersRecieved.length ; i++){
//                let itemSelected = ordersRecieved[i].trim().toLowerCase();
//                if (inventoryStock.includes(itemSelected)){
//                 realOrders.push(itemSelected);
//                 cups -= 1;
//                }
//                else if(!inventoryStock.includes(itemSelected)){
//                   console.log("item not found");
//                }
//        }
//     }
//     else{
//         console.log("no cups left")
//     }   
// }

// console.log(powerOn());
// console.log(realOrders);



// MISTAKE 3 - Didn't added closures.
// remapped teh logics this time
// used cups too for conditionals instead of only selected items etc. 

// const inventoryStock = ["coffee", "tea", "water" , "latte" , "espresso"];
// const ordersRecieved = ["  COFFEE  ", "Tea", "  pOiSoN ", "water", "Espresso", "Latte"];

// let realOrders = []; 
// let cups = 3;
// const powerOn = () =>{
//         for (let i = 0 ; i < ordersRecieved.length ; i++){
//                let itemSelected = ordersRecieved[i].trim().toLowerCase();
//                     if(cups <= 0){
//                     console.log(`0 CUPS LEFT - YOU CAN't ORDER ${itemSelected}`);
//                     break;
//                }
//                else if (!inventoryStock.includes(itemSelected)){
//                   console.log(` ITEM NOT IN STOCK ~ ${itemSelected}`);
//                }
          
//                else {
//                 realOrders.push(itemSelected);
//                 cups = cups - 1;
//                }
            
//        }
//        return realOrders;
//     }
// console.log(powerOn());