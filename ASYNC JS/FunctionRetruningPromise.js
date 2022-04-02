// function returning promise

function ricePromise() {
  const bucket = ["coffee", "milk", "chips", "salt", "vegetables", "rice"];
  return new Promise((resolve, reject) => {
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
}

ricePromise()
  .then((myPromise) => {
    console.log("lets eat", myPromise);
  })
  .catch((e) => {
    console.log(e);
  });
