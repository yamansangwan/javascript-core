// await can be used inside of "async function"
// 1 await removes 1 then 
// async function returns a promise

{
    // using promise and then

 function printer () {
    const data = new Promise (
        (res,rej) => res("hi using promise")
    )
    return data
}

printer().then((data) => console.log(data))   

}


{

// same using await

async function printer () {
    const data = await("hi using await")
    return data
}

console.log(printer())

}


