// IMPORTANT ARRAY METHODs
const numbers = [1, 2, 3, 4];

function myFunc(number, index) {
  console.log(`index is ${index} number is ${number}`);
}

for (let i = 0; i < numbers.length; i++) {
  myFunc(numbers[i], i);
}
// index is 0 number is 1
// index is 1 number is 2
// index is 2 number is 3
// index is 3 number is 4

numbers.forEach(myFunc);

// index is 0 number is 1
// index is 1 number is 2
// index is 2 number is 3
// index is 3 number is 4

numbers.forEach(function (number, index) {
  console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function (x) {
  console.log(x * 2);
});
// 2
// 4
// 6
// 8
