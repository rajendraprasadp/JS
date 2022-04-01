// find method
const myArray = ["hello", "cat", "dog"];

// function isLength3(string) {
//   return string.length === 3;
// }

const ans = myArray.find((str) => str.length === 3);
console.log(ans);
// cat

const users = [
  { firstName: "raj", age: 21 },
  { firstName: "mrtou", age: 22 },
  { firstName: "hazel", age: 23 },
  { firstName: "jandu", age: 20 },
  { firstName: "sandy", age: 21 },
];

// find user whose age is 22
const user = users.find((user) => user.age === 22);
console.log(user);
// { firstName: 'mrtou', age: 22 }
