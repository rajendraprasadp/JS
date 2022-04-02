function getTwoandAdd(num1, num2, onSuccess, onFailure) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    onSuccess(num1, num2);
  } else {
    onFailure();
  }
}
// function addTwo(num1, num2) {
//   console.log(num1 + num2);
// }
getTwoandAdd(
  "8",
  4,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("wrong dat");
  }
);
