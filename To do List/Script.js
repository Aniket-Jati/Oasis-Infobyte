const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask() {
  if (inputBox.value === "") {
    alert("You Must Write Something About Your Task !!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

taskList.addEventListener(
  "click",
  function (check) {
    if (check.target.tagName === "LI") {
      check.target.classList.toggle("checked");
      saveData();
    } else if (check.target.tagName === "SPAN") {
      check.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
  taskList.innerHTML = localStorage.getItem("data");
}

showData();