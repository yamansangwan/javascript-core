// Problem ::
// 1. player opens chest
// 2. player get a random array of items
// 3. player have limiteds space in backpack
// 4. chest have traps too

// Solution ::
// manages player inventory.
// manages traps found
// highlight special items
// enforce the backpack limit



// Attempt 1 :



const chestSys = () => {
    // initial coins.
    let goldCoins = 100;

    // new array for inventory items.
    let backPack = [];
    // let bgStorage = backPack.length; no need as array length changes.
    return () => {

        // logic for chest opening and traps. 
       for (let i = 0 ; i < lootArr.length ; i++){
            if (lootArr[i] === "snake"){
                goldCoins -= 50;
                console.log(`SHIT : bitten by a rattle snake \nYOU LOST ${goldCoins} COINS.`);
                continue;
            }
            else if (backPack.length > 3) {
                console.log(`BACKPACK FULL !!! YOU HAVE ~ ${backPack}`);
                break;
            }

            else if (lootArr[i] === "boss key"){
                backPack.unshift(lootArr[i]);
                continue;
            }

            else {
                goldCoins += 17;
                // bpStorage ++; no need
                backPack.push(lootArr[i]);
                
            }

 
       } 
       console.log(`you have ${goldCoins} gold coins`); 
       return backPack;
      
    }

}

// loop available as an arr in the chest.
let lootArr = ["health potion", "snake", "boss key", "iron sword", "shield", "helmet"];

let openChest = chestSys(); // contains() =>.
console.log(openChest(lootArr));


