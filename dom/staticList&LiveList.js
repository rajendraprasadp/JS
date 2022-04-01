// static list vs live list

// queryselectorAll returns Nodelist which is static and not seen in console
// const listItem = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = " item 6";
// const list = document.querySelector(".todo-list");
// list.append(sixthLi);
// console.log(listItem);
// console.log(sixthLi);
// console.log(list);

// getelementby returns HTMLCOLLECTION which is static and seen in console
const listt = document.querySelector(".todo-list");
const listItem = listt.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent = " item 6";
const list = document.querySelector(".todo-list");
list.append(sixthLi);
console.log(listItem);
console.log(sixthLi);
console.log(list);
