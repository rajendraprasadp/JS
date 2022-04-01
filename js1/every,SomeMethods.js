// EVERY METHOD

// checks for each and every element in the object
const numbers = [1, 2, 3, 4];

const ans = numbers.every((num) => num % 2 == 0);
console.log(ans);

const userCart = [
  { productId: 1, productName: "tv", price: 12000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "table", price: 1200 },
  { productId: 4, productName: "washing machine", price: 120000 },
];

// check every product less than 30000
const items = userCart.every((cartItem) => {
  return cartItem.price < 30000;
});
console.log(items);
// false

// SOME METHOD

// returns true for atleast one correct product satisfying the given condition
// CHECK ANY PRODUCT PRICE > 100000

const bigItems = userCart.some((item) => {
  return item.price > 100000;
});
console.log(bigItems);
// true
