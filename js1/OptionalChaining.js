// optional chaining

const user = {
  firstName: "harsit",
  //   address: { houseNumber: "1234" },
};

console.log(user?.address?.houseNumber);

// undefined
// returns undefined instead of error
