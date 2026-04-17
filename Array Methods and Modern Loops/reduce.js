// .reduce() - reduces teh array to a single value
// It basically gives a perticular value in return in exchange of input array.(according to the operations performed inside {}).
// syntax -> arr.reduce((running_result, value, index) = > {}).



// Takes the first two values (TF2) to perform return op.. then repeats the op.. using the running_result through-out other elements of the array passed for example ::

let arr = [44,55,66,77,88,99];
let arr2 = arr.reduce(
    (hehe , indx) => {
        return hehe + indx;
    }
)
console.log(arr , arr2);




let arr = [44,55,66,77,88,99];
let arr2 = arr.reduce(
    (hehe , hehe2 , hehe3) => {
        return hehe + hehe2 + hehe3;
    }
)
console.log(arr , arr2);


