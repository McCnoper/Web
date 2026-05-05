"use strict";
console.log("Підключено JavaScript для Практичної роботи No7");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("output");

function loadTasks() {
    try {
        const tasksJSON = localStorage.getItem("tasks");
        return tasksJSON ? JSON.parse(tasksJSON) : [];
    } catch (error) {
        console.error("Помилка при читанні JSON:", error);
        return [];
    }
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    const tasks = loadTasks();
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        li.setAttribute("data-index", index);
        taskList.appendChild(li);
    });
}

document.getElementById("addTask").addEventListener("click", function () {
    const taskText = document.getElementById("taskInput").value.trim();
    if (taskText !== "") {
        const tasks = loadTasks();
        tasks.push(taskText);
        saveTasks(tasks);
        displayTasks();
        document.getElementById("taskInput").value = "";
    }
});

taskList.addEventListener("click", function (event) {
    const li = event.target.closest("li");
    
    if (li && taskList.contains(li)) {
        const index = li.getAttribute("data-index");
        let tasks = loadTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        displayTasks();
        console.log("Завдання видалено");
    }
});

displayTasks();