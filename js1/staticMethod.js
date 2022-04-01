// static methods and properties
//

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static AnimalInfo() {
    return "within class";
  }

  static props = "properties";
}
const animal = new Animal("jerry", 1);

console.log(Animal.AnimalInfo());
// within class

console.log(Animal.props);
// properties
