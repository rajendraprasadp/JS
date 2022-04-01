const app = () => {
  const myFunc = () => {
    console.log("hello");
  };
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  const mul = (num1, num2, num3) => {
    return num1 * num2 * num3;
  };
  console.log(addTwo(1, 2));
  console.log("inside app");
  console.log(mul(2, 4, 6));
};

app();
