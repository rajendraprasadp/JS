// USING CLOSERS ADOPT THIS

// hi you called me
// i have been called already
// i have been called already

function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("hi you called me ");
      counter += 1;
    } else {
      console.log("i have been called already");
    }
  };
}

const myFunc = func();
myFunc();
myFunc();
