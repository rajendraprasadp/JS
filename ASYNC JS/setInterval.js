// console.log("helo");
// setInterval(() => {
//   console.log(Math.random());
// }, 2000);
// console.log("helo");
const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const rgb = `rgb(${red},${green},${blue})`;
  body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
  button.textContent = body.style.background;
});
