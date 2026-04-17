// callback

// it is a fuction used as an argument by another function.

let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value); // 1 or 2?