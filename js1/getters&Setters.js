// getters and setters

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //   getter method
  //   by including "get" fullName function is converted into fullName property
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("raj", "p", 21);
console.log(person.fullName);
// raj p

person.fullName = "sandy shed";
console.log(person);
// { firstName: 'sandy', lastName: 'shed', age: 21 }
