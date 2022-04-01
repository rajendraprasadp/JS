// Setmethod

const numbers = [1, 2, 3, 4, 5, 32, 5, 6, 223, 5, 7];
console.log(numbers.length);
const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);

let length = 0;
for (let num of uniqueNumbers) {
  length += 1;
}
console.log(length);

// clone using Object.assign

const obj1 = {
  key1: "val1",
  key2: "val2",
};
// cloning using spread operator
// const obj2 = { ...obj1 };

const obj2 = Object.assign({}, obj1);
obj1.key3 = "val3";
console.log(obj1);
console.log(obj2);

// { key1: 'val1', key2: 'val2', key3: 'val3' }
// { key1: 'val1', key2: 'val2' }

// const obj2 = obj1;
// obj1.key3 = "val3";
// console.log(obj1);
// console.log(obj2);

// { key1: 'val1', key2: 'val2', key3: 'val3' }
// { key1: 'val1', key2: 'val2', key3: 'val3' }
