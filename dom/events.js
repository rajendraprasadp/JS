// events
// normal function returns button as this
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", function () {
  console.log("clicked");
  console.log(this.textContent);
});

// arrow function returns window object for this
btn.addEventListener("click", () => {
  console.log("clicked");
  console.log(this.textContent);
});

// clicked
// <button class=​"btn btn-headline">​Learn More​</button>​

// clicked
//  Window {}

// clicked
// Learn More
// clicked
// undefined
