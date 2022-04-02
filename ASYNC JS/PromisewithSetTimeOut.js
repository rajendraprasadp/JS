// promise && setTimeout

// I want to rsolve/reject promise after 2 seconds

function myPromise() {
  return new Promise((resolve, reject) => {
    // const value = true; =====> to resolve
    const value = false;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

myPromise()
  .then(() => {
    console.log("reolved");
  })
  .catch(() => {
    console.log("reject");
  });
