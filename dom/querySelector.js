// querselector and queryselectorAll

const mainHeading = document.querySelector("#main-heading");

const header = document.querySelector(".nav-item");
// only first one is returned
const header1 = document.querySelectorAll(".nav-item");

console.log(header1);
// returns nodelist of all items
// NodeList(3) [li.nav-item, li.nav-item, li.nav-item]
// 0: li.nav-item
// 1: li.nav-item
// 2: li.nav-item
// length: 3
