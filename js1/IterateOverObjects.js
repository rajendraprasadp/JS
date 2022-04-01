// how to iterate over an object

const person = {
  name: "raj",
  age: 22,
  "person hobbies": ["cricekt", "badminton", "music"],
};

// for in loop
// Object.keys

// for (let key in person) {
//   //   console.log(`${key}:${person[key]}`);     using template literals
//   console.log(key, person[key]);
// }
for (let i of Object.keys(person)) {
  console.log(person[i]);
}

// raj
// 22
// [ 'cricekt', 'badminton', 'music' ]
