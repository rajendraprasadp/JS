// REST PARAMETERS

const total = function (...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};
const ans = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(ans);
// 55
