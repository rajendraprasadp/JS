// get multiple elements using
// getElementByClassName and querySelectorAll

const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);

// array like object is retuned i.e., HTML collection

// HTMLCollection(3)
//  [li.nav-item, li.nav-item, li.nav-item]
// 0: li.nav-item
// 1: li.nav-item
// 2: li.nav-item
// length: 3

const navItems1 = document.querySelectorAll(".nav-item");
console.log(navItems1[2]);

// nodelist is retured

// NodeList(3) [li.nav-item, li.nav-item, li.nav-item]
// 0: li.nav-item
// 1: li.nav-item
// 2: li.nav-item
// length: 3
