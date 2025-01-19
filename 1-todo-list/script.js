function todoList(todos) {
  const content = document.getElementById("content");
  const ul = document.createElement("ul");

  todos.forEach((todoItem) => {
    const li = document.createElement("li");
    li.textContent = todoItem.todo;

    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
        alert("Oops! You haven't done it yet.");
      } else {
        li.style.textDecoration = "line-through";
        alert("Yay! Successfully completed.");
      }
    });
    ul.appendChild(li);
  });
  content.appendChild(ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
