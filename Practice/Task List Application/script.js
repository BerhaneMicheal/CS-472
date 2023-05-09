document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const clearTasksButton = document.getElementById("clearTasksButton");
    const taskList = document.getElementById("taskList");
  
    let tasks = []; //This line initializes an empty array tasks which will store the list of tasks.
  
    function updateTaskList() {
      taskList.value = tasks.join("\n");
    }
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        tasks.push(taskText); //This line adds the taskText to the tasks array.
        updateTaskList();
        taskInput.value = "";
      }
    });
  
    clearTasksButton.addEventListener("click", function () {
      tasks = [];
      updateTaskList();
    });
  });
  