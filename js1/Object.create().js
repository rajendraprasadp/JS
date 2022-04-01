// const obj1 = {
//   key1: "val1",
//   key2: "val2",
// };

// // const obj2 = {};
// // obj2.key3 = "val3";

// // console.log(obj2.key1);
// // undefined

// const obj2 = Object.create(obj1);
// obj2.key3 = "val3";

// // we are rquesting javaScript to access obj1 from obj2 through connection from Object.create
// console.log(obj2.__proto__);
// // { key1: 'val1', key2: 'val2' }

// console.log(obj2.key1);
// // val1

const userMethods = {
  hobby: function () {
    return `${this.firstName}s hobby is cricket`;
  },

  likes: function () {
    return `${this.firstName} ${this.lastName} likes chess according to his age of ${this.age}`;
  },
};

function createUser(firstName, lastName, age, address, email) {
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.address = address;
  user.age = age;

  return user;
}

const user1 = createUser("raj", "p", "21", "koppa", "raju@gmail.com");
const user2 = createUser("hazle", "noob", 24, "bijapur", "hazel@gmail.com");
const user3 = createUser("msd", "p", 20, "yadgir", "msd@gmail.com");
const user4 = createUser("sandy", "p", 22, "chikkodi", "sandy@gmail.com");

// console.log(user3);
console.log(user3.hobby());
