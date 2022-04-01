// const btn = document.querySelectorAll(".my-buttons button");
// console.log(btn);
// for (let button of btn) {
//   button.addEventListener("click", (event) => {
//     console.log(event.currentTarget);
//     console.log(event.target);
//   });
// }

// currentTarget ===> on which button event listener was attached
// target======>from which button was event fired

// by clicking button change backgroud
// color to blue and text color to white

const btn = document.querySelectorAll(".my-buttons button");
btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "blue";
    e.target.style.color = "white";
  });
});
