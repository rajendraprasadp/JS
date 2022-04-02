// pyramid doom
const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head5 = document.querySelector(".heading5");

function changeText(element, text, color, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
    } else {
      console.log("your element does not esxist");
    }
    if (onSuccess) {
      onSuccess();
    } else {
      if (onFailure) {
        onFailure();
      }
    }
  }, time);
}

changeText(
  head1,
  "one",
  "blue",
  1000,
  () => {
    changeText(
      head2,
      "two",
      "red",
      2000,
      () => {
        console.log("yes");
      },
      () => {
        console.log("heading2 does not exist");
      }
    );
  },
  () => {
    console.log("heading 1 does not exist");
  }
);
