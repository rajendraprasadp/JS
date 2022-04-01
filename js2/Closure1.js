// a CLOSURE gives you access to an outer function's scope from an inner function.

// function printFullName(firstName, lastName) {
//   function printName() {
//     console.log(firstName, lastName);
//   }
//   return printName;
// }
// const ans = printFullName("raj", "p");
// console.log(ans);
// ans();

function myFunction(power) {
  return function (number) {
    return number ** power;
  };
}

// arrow function similar to above function
// const myFunction = (power) => (number) => number ** power;

const square = myFunction(2);
const ans1 = square(3); 
console.log(ans1);
