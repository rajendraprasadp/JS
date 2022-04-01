// CALLBACK FUNCTIONS

// callback function acccepting a parameter as input
const myFunc2 = function (a) {
  console.log("inside callback func");
  console.log(`my name is ${a}`);
};

// main function accepting parameter as function which is CALLBACK FUNCTION
function myFunc(callback) {
  console.log("in main function");
  callback("raj");
}

myFunc(myFunc2);
// in main function
// inside callback func
// my name is raj

// FUNCTION RETURNING FUNCTION
function myFunc() {
  function hello() {
    return "helloworld";
  }
  return hello();
}
const ans = myFunc();
console.log(ans);
