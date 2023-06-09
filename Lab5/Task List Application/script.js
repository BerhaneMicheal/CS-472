document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const clearTasksButton = document.getElementById("clearTasksButton");
    const taskList = document.getElementById("taskList");

    // Load saved tasks from localStorage
    loadTasks();

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            if (taskList.value === '') {
                taskList.value = taskText;
            } else {
                taskList.value += '\n' + taskText;
            }
            saveTask(taskText);
            taskInput.value = "";
        }
    }

    addTaskButton.addEventListener("click", addTask);

    clearTasksButton.addEventListener("click", () => {
        taskList.value = '';
        localStorage.removeItem("tasks");
    });

    

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(taskText => {
            addTask(taskText);
        });
    }

    function saveTask(taskText) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
