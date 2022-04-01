// Computed properties

const key1 = "obj1";
const key2 = "obj2";

const v1 = "val1";
const v2 = "val2";

// const obj = {
//   obj1: "val1",
//   obj2: "val2",
// };

// computed property
const obj = {
  [key1]: v1,
  [key2]: v2,
};

console.log(obj);
// { obj1: 'val1', obj2: 'val2' }

// const obj = {};  generally done using this method
// (obj[key1] = v1), (obj[key2] = v2);
