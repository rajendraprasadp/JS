class CreateUser {
  constructor(firstName, lastName, age, address, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.age = age;
  }
  about() {
    return `${this.firstName} ${this.lastName} likes chess according to his age of ${this.age}`;
  }
}

const user1 = new CreateUser("raj", "p", "21", "koppa", "raju@gmail.com");
const user2 = new CreateUser("hazle", "noob", 24, "bijapur", "hazel@gmail.com");
const user3 = new CreateUser("msd", "p", 20, "yadgir", "msd@gmail.com");
const user4 = new CreateUser("sandy", "p", 22, "chikkodi", "sandy@gmail.com");

// console.log(user1.about());
// // raj p likes chess according to his age of 21

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isCute() {
    return `${this.name} is cute`;
  }
  isSupercute() {
    return `${this.name} is super-cute`;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

// EXTENDS KEYWORD FACILITATES INHERITANCE
class Dog extends Animal {
  constructor(name, age, speed) {
    // super keyword tracks back to parent class
    super(name, age);
    this.speed = speed;
  }

  isCute() {
    return ` in dog calss. ${this.name} is cute`;
  }
}

const animal = new Dog("tom", 2, 45);
console.log(animal);
console.log(animal.isCute());

// Dog { name: 'tom', age: 2, speed: 45 }
//  in dog calss. tom is cute
