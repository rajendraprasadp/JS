// METHODS====> nothing but function within object

function info() {
  console.log(`name is ${this.name} and age is ${this.age}`);
}

const person1 = {
  name: "raj",
  age: 12,
  about: info,
};
const person2 = {
  name: "hazel",
  age: 10,
  about: info,
};
const person3 = {
  name: "msd",
  age: 189,
  about: info,
};

person1.about();
person2.about();
person3.about();

// name is raj and age is 12
// name is hazel and age is 10
// name is msd and age is 189
