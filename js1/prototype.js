// only functions provide prototype property

function helo() {
  console.log("hello");
}

console.log(helo.prototype);
// {} prototype provides free space i.e.,empty object

helo.prototype.abc = "abc";
helo.prototype.sing = function () {
  return "lalaalla";
};

console.log(helo.prototype.sing());
// lalaalla
