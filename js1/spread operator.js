const newArray = [..."12132324235"];

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key3: "value3",
  key4: "value4",
};

const newObj = { ...obj1, ...obj2, key5: "value5" };

// {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     key5: 'value5'
//   }
