// OBJECT DESTRUCTURING
const person = {
  name: "raj",
  age: 22,
  hobbies: ["cricekt", "badminton", "music"],
};

// const name = person.name;
// const age = person.age;
// console.log(name, age);

const { name, age, ...rest } = person;
// raj 22 { hobbies: [ 'cricekt', 'badminton', 'music' ] }

// OBJECTS INSIDE ARRAY
const users1 = [
  {
    userId: 1,
    firstName: "raj",
    skill: "python",
  },
  {
    userId: 2,
    firstName: "msd",
    skill: "java",
  },
  {
    userId: 1,
    firstName: "mrTou",
    skill: "topping exams",
  },
];

for (let user of users1) {
  //   console.log(user.firstName);
  // raj
  // msd
  // mrTou
}

// NESTED DESTRUCTURING
const users = [
  {
    userId: 1,
    firstName: "raj",
    skill: "python",
  },
  {
    userId: 2,
    firstName: "msd",
    skill: "java",
  },
  {
    userId: 3,
    firstName: "mrTou",
    skill: "topping exams",
  },
];

const [{ skill }, , { userId }] = users;
console.log(userId, skill);
