console.log("hello world");

const id = setTimeout(() => {
  console.log("inside timeout");
}, 1000);

console.log("clear id");
// clears the setTimeout function
clearTimeout(id);
console.log("end");
