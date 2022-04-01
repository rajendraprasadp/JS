// sort method
// sort((a,b)=>{return a-b})  =====> ascending
// sort((a,b)=>{return b-a})  =====> decending

const numbers = [2, 3, 4, 5, 6, 4353, 345, 23, 24];
console.log(numbers.sort());
// [
//     2, 23,   24, 3,
//   345,  4, 4353, 5,
//     6
// ]

const num = numbers.sort((a, b) => {
  return a - b;
});
console.log(num);

// [
//     2,  3,  4,   5,
//     6, 23, 24, 345,
//  4353
// ]

const userCart = [
  { productId: 1, productName: "tv", price: 12000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "table", price: 1200 },
  { productId: 4, productName: "washing machine", price: 120000 },
];

// lowToHigh
const result = userCart.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(userCart);

// original products is unchanged using slice
// [
//     { productId: 1, productName: 'tv', price: 12000 },
//     { productId: 2, productName: 'laptop', price: 120000 },
//     { productId: 3, productName: 'table', price: 1200 },
//     { productId: 4, productName: 'washing machine', price: 120000 }
//   ]
console.log(result);

// changes in products after sorting from low to high

// [
//     { productId: 3, productName: 'table', price: 1200 },
//     { productId: 1, productName: 'tv', price: 12000 },
//     { productId: 2, productName: 'laptop', price: 120000 },
//     { productId: 4, productName: 'washing machine', price: 120000 }
//   ]
