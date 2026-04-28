// Financial Records Management

// problem : DUE TO CONNECTION LOST DUMPED ALL THE TRANSACTION LOGS GETS MESSIER SOME CONTAINS- ERROR CODES , ACTUAL MONEY VALUE HAVE WHITE SPACES, MISS FORMATTED AS TEXT INSTEAD OF NUMBERS, BUILD A PIPELINE THAT CLEANS THE DATA AND RETURNS FINAL BALANCE VALUE OF BANK ACCOUNT 



const rawRecords = [
    "  +1500 ",
    "ERR_CONNECTION_RESET",
    "  -200 ",
    "VOID_TXN",
    " +450",
    " -30 ",
    "ERR_TIMEOUT"
];

// 1. remove white space
// 2. convert into numbers
// 3. filter only the numbers
// 4. total sum of amount present



// pipeline

const transformedRecords = rawRecords.map(
    (item) => Number(item.trim()) 
)
// console.log(finalBalance)


const validAmount = transformedRecords.filter(
    item => !Number.isNaN(item) // removing Nan Items
)
console.log(`Valid Amounts ->` , validAmount);


// adding final valid records amount
const finalBalance = validAmount.reduce(
    (ac,item) => {
         ac = ac + item
         return ac
    } , 0
)

console.log(`final balance is --> ${finalBalance}`);

