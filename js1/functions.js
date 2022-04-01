// FUNCTION DECLARATION

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(9));

function firstChar(str) {
  return str[0];
}
console.log(firstChar("raj"));

function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  retrun - 1;
}

arr = [1, 3, 4, 5, 6, 7, 8];
const result = findTarget(arr, 5);
console.log(result);

// FUNCTION EXPRESSION
function isEven(num) {
  return num % 2 === 0;
}

function firstChar(str) {
  return str[0];
}

// FUNCTION EXPRESSIONS OF THE TYPES BELOW.BOTH ARE SIMILAR

const isEven = function (num) {
  return num % 2 === 0;
};

const firstChar = function (str) {
  return str[0];
};
