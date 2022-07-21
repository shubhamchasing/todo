const form = document.getElementById("id-form");
const list = document.getElementById("id-list");
const task = document.getElementById("id-task");

//add task

form.addEventListener("submit", addTask);

//remove task

list.addEventListener("click", removeTask);

function addTask(event) {

  event.preventDefault();
  const newTask = task.value;
  const li = document.createElement("li");
  li.className = "task-list";

  const text = document.createTextNode(newTask);
  li.appendChild(text);

  const deleteButton = document.createElement("button");

  deleteButton.className = "dlt-btn delete";

  deleteButton.appendChild(document.createTextNode("X"));

  li.appendChild(deleteButton);

  list.appendChild(li);
  form.reset()
}

function removeTask(event) {
  if (event.target.classList.contains("delete")) {
    const li = event.target.parentElement;
    list.removeChild(li);
  }
}
