"use strict";
console.log("Підключено JavaScript для Практичної роботи №4");
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});
    

