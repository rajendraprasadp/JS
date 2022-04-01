// get and set attributes

const link = document.querySelector("a");
link.setAttribute("href", "www.google.com");
// setAttribute sets the attribute to desired value
console.log(link.getAttribute("href"));
// www.google.com

// get getAttribute get value from attibutr

const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("type"));
// text
