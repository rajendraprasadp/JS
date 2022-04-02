// Promise
console.log("start");
const bucket = ["coffee", "milk", "chips", "vegetables", "rice"];
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("rice") &&
    bucket.includes("salt")
  ) {
    resolve({ value: "friedRice" });
  } else {
    reject("canmt");
  }
});

friedRicePromise
  .then((myFriedRice) => {
    console.log("lets eat", myFriedRice);
  })
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
  console.log("wwithin time out");
});

for (i = 0; i <= 10; i++) {
  console.log(Math.random(), i);
}

console.log("end");

// start   ========> first output as expected

// 0.8418246139366643 0  =========> for loop iteration
// 0.9651512868465819 1
// 0.9020056456723822 2
// 0.21008505123218835 3
// 0.1959670637942963 4
// 0.06492460867618166 5
// 0.6254153860193958 6
// 0.35729562302411866 7
// 0.0497591457424178 8
// 0.2802051382333841 9
// 0.03773394351866588 10
// end                   ===========> last line of code

// below outputs are given to browers to process ,
// while the above outputs are carrried out by javaScript

// .then() and .catch() methods are stored in MICROTASK QUEUE

// canmt                 ==========> microtask queue has high priority than callback queue
// wwithin time out       ==========>LAST CALLBACK QUEUE ALLOWS TO PERFORM settimeout function
