const allButtons = document.querySelectorAll("button");

for (let button of allButtons) {
  button.addEventListener("click", function () {
    console.log((this.textcontent = "hi"));
  });
}
