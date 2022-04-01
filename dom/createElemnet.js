// document.createElement() , append ,prepend ,remove
const newTodo = document.createElement("li");
// const newTodoText = document.createTextNode("teach");
newTodo.textContent = "table";
const todoList = document.querySelector(".todo-list");
todoList.prepend(newTodo);

const todo1 = document.querySelector(".todo-list li");
todo1.remove();
