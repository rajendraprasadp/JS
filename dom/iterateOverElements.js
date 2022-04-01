// iterate elements

// foreach method cant be used for HTML collection

// let navItems = document.getElementsByTagName("a");
// console.log(navItems);

// // for (i = 0; i < navItems.length; i++) {
// //   const navItem = navItems[i];
// //   //   console.log(navItem);
// //   navItem.style.backgroundColor = "white";
// //   navItem.style.color = "blue";
// //   navItem.style.fontWeight = "bold";
// // }

// // for (let navItem of navItems) {
// //   navItem.style.backgroundColor = "white";
// //   navItem.style.color = "blue";
// //   navItem.style.fontWeight = "bold";
// // }

// // convert html collection to array

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems)); //true

// navItems.forEach((navItem) => {
//   // now HTMLCOLLECTION converted to array, array propertirs can be applied to it
//   navItem.style.backgroundColor = "white";
//   navItem.style.color = "blue";
//   navItem.style.fontWeight = "bold";
// });

const navItems = document.querySelectorAll("a");
console.log(navItems);

for (let navItem of navItems) {
  navItem.style.backgroundColor = "white";
  navItem.style.color = "blue";
  navItem.style.fontWeight = "bold";
}
