// Map Object
// similar to Object, can keep anything as key

const person = new Map();
person.set("firstName", "raj");
person.set("age", "10");
person.set(1, "one");
// console.log(person);
for (let [key, value] of person) {
  console.log(key, value);
}

const person1 = {
  id: 1,
  firstName: "raj",
};

const info = new Map();
info.set(person1, { age: 8, gender: "male" });
console.log(person1.id);
console.log(info.get(person1).age);
// firstName raj
// age 10
// 1 one
// 1
// 8
