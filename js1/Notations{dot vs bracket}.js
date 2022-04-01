// dot notation vs bracket notation
// keys are always in string by default,
// if you want to access key with only possible using bracket notation

const key = "email";
const person = {
  name: "raj",
  age: 22,
  "person hobbies": ["cricekt", "badminton", "music"],
};

person.gender = "male";

person["key"] = "rajuprasadp1@gmail.com";
