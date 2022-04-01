// before , after

const todoBefore = document.createElement("li");
todoBefore.textContent = "hello beforwe";
const todoList = document.querySelector(".todo-list");

todoList.after(todoBefore);
todoList.before(todoBefore);
