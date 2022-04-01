//  reduce method
const arr = [1, 2, 3, 4, 5];

// aim:sum all the numbers incrementally
const sum = arr.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sum);

// realistic example

const userCart = [
  { productId: 1, productName: "tv", price: 12000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "table", price: 1200 },
  { productId: 4, productName: "washing machine", price: 120000 },
];

console.log(
  userCart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0)
);
