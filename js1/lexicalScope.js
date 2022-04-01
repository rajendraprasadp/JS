// lexical scope

const myApp = function () {
  const myVar = "value1";

  function myfunc() {
    // const myVar = "value59";
    console.log("inside myFunc", myVar);
  }
  console.log(myVar);
  myfunc();
  //   value1
  //   inside myFunc value1
};
myApp();
