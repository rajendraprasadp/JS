const person1 = {
  name: "raj",
  age: 12,
  about: function (favcar, favbike) {
    console.log(
      `name is ${this.name} and age is ${this.age},${favcar},${favbike}`
    );
  },
};
const person2 = {
  name: "hazel",
  age: 10,
};

// person1.about.call();
// // name is undefined and age is undefined
// person1.about.call(person2);
// // name is hazel and age is 10

person1.about.call(person2, "audi", "suzuki");
// name is hazel and age is 10,audi,suzuki

// APPLY METHOD======>similar to call instead of passing
//  arguments one at a Time, list is passed correspondingly
person1.about.apply(person2, ["audi", "suzuki"]);
// name is hazel and age is 10,audi,suzuki

// BIND METHOD======>  similar to call takes arguments one by one , but returns nothing .
// this is stored in function .we can call the function whenever required
const func = person1.about.bind(person2, "audi", "suzuki");
func();
// name is hazel and age is 10,audi,suzuki

const myfunc1 = person1.about.bind(person1);
myfunc1();
