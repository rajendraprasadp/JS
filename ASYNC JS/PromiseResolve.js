// Promise.resolve
// Promise.chaining
const myPromise = Promise.resolve(5);

// myPromise.then((value) => {
//   console.log(value);
// });

// OR using Promise.resolve(value)

Promise.resolve(5).then((value) => {
  console.log(value);
});

// .then()  ===> then method always return promise
// therefore wel be able to create promise chain

function mePromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

mePromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    return value;

    // value returned is another promise
  })
  .then((value) => {
    console.log(value);
    value += "barbar";
    return value;
    // return Promise.resolve(value);
    // both above and this statements are same
  })
  .then((value) => console.log(value));

//   5
//   foo
//   foobar
//   foobarbarbar
