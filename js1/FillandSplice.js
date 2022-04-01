// fill method  ====> changes original array
// value,start,end
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// myArray.fill(0, 2, 4);
// console.log(myArray);
// [
//     1, 2, 0, 0,
//     5, 6, 7, 8
//   ]

// splice method ===> delete or insert in the array and changes original array
// Start,delete,insert

myArray.splice(1, 2, "lol");
console.log(myArray);
