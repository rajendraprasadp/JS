// keypress event and mouse over eveent
// mouseleave

const body = document.body;

// body.addEventListener("keypress", (e) => {
//   console.log(e);
//   console.log(e.key);
// });

const btn = document.querySelector(".btn-headline");
btn.addEventListener("mouseover", () => {
  console.log("over");
});

const btn2 = document.querySelector(".btn-headline");
btn2.addEventListener("mouseleave", () => {
  console.log("left");
});
