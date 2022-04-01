// map method

const numbers = [3, 2, 4, 1, 7];

// const square = function (num) {
//   return num * num;
// };

const result = numbers.map((num) => {
  return num * num;
});
console.log(result);
// [ 9, 4, 16, 1, 49 ]

const users = [
  { firstName: "raj", age: 21 },
  { firstName: "mrtou", age: 22 },
  { firstName: "hazel", age: 23 },
  { firstName: "jandu", age: 20 },
  { firstName: "sandy", age: 21 },
];

// store all firstnbame in separate array
const userNames = users.map(function (user) {
  return user.firstName;
});
console.log(userNames);
// [ 'raj', 'mrtou', 'hazel', 'jandu', 'sandy' ]

// filter method
const evenNumbers = numbers.filter((num) => {
  return num % 2 == 0;
});
console.log(evenNumbers);
