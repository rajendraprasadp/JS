// callbacks,callback HTMLElement, pyramid of doom

const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head5 = document.querySelector(".heading5");

// settime out to change head1 and head2 in 1 and 2 secs
setTimeout(() => {
  head1.textContent = "head1";
  head1.style.color = "blue";
  setTimeout(() => {
    head2.textContent = "head2";
    head2.style.color = "violet";
  }, 2000);
}, 1000);

// callback hell

setTimeout(() => {
  head1.textContent = "head1";
  head1.style.color = "blue";
  setTimeout(() => {
    head2.textContent = "head2";
    head2.style.color = "violet";
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          head5.textContent = "head5";
          head5.style.color = "red";
        }, 2000);
      }, 1000);
    }, 2000);
  }, 2000);
}, 1000);
