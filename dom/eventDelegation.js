// event delegation
const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  //    preventDefault prevents refresh of page ... very inportant
  console.log(todoInput.value);
  const newTodotext = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerhtml = `
          <span class="text">${newTodotext}</span>
          <div class="todo-buttons">
                  <button class="todo-btn done">done</button>
                  <button class="todo-btn remove">remove</button>
          </div>
        `;
  newLi.innerHTML = newLiInnerhtml;
  todoList.append(newLi);

  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // check if user press on done buttonL
  if (e.target.classList.contains("remove")) {
    const targetdLi = e.target.parentNode.parentNode;
    console.log(targetdLi);
    targetdLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    console.log(liSpan);
    liSpan.style.textDecoration = "line-through";
  }
});
