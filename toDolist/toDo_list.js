// Purpose: To create a simple todo list application
// explanation of the code below
// 1. We have a function called addTask that is called when the addTaskBtn is clicked
// 2. We get the value of the taskInput and store it in a variable called taskText
// 3. We check if the taskText is not an empty string
// 4. If the taskText is not an empty string, we add a new object to the tasks array with the text property set to the value of taskText
// 5. We then clear the value of the taskInput
// 6. We then call the displayTasks function
// 7. The displayTasks function creates a new list item for each task in the tasks array
// 8. The list item contains the task text and a button to remove the task
// 9. The remove button has an event listener that calls the removeTask function when clicked
// 10. The removeTask function removes the task from the tasks array and calls the displayTasks function
// 11. The clearCompletedBtn has an event listener that calls the clearCompletedTasks function when clicked
// 12. The clearCompletedTasks function filters the tasks array to remove completed tasks and calls the displayTasks function
// 13. The displayTasks function sets the innerHTML of the taskList element to an empty string
// 14. It then loops through the tasks array and creates a new list item for each task
// 15. The list item contains the task text and a button to remove the task
// 16. The remove button has an event listener that calls the removeTask function when clicked

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
// Array to store tasks
let tasks = [];
// Add event listener to addTaskBtn
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}
// Create a displayTasks function
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}
// Create a toggleTask function
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}
// create a clearCompletedTasks function
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}
// add event listener to addTaskBtn and clearCompletedBtn
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
// Display tasks
displayTasks();