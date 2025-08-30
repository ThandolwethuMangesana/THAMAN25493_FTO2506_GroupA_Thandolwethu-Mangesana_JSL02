// array to hold tasks
const task = [];

// function to add a task
function getTaskDetails(task) {
  // Ask the user to give the task title (name of the taskk
  // prompt formated to match the title prompt.png
  const title = prompt("enter task ${taskNumer} title:");
}
// Ask the user for a short description of what must be done
const description = prompt("enter task ${taskNumer} description:");

let satus;
while (true) {
  // Force everything to lowercase
  satus = prompt(
    "enter task ${taskNumer} status (todo, doing, or done):"
  ).toLowerCase();
}
  // Only allow the 3 statuses we want: todo, doing, done
  // Check if the status is one of the allowed options
if (statusInput === 'todo' || statusInput === 'doing' || statusInput === 'done') {
        // If correct, save the status and stop the loop
        taskStatus = statusInput;
        break;
    } else {}
        // If wrong, show a message and ask again
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");

    // Save the task information as an object
const newTask = { tittle: taskTitle,
    description: taskDescription,
    status: taskStatus
};

