// array to hold tasks
const task = [];

// function to add a task
function getTaskDetails(task) {
  // Ask the user to give the task title (name of the taskk
  // prompt formated to match the title prompt.png
  const title = prompt("enter task ${taskNumer} title:"); 
  
  // Ask the user for a short description of what must be done
  const description = prompt("enter task ${taskNumer} description:");
}

//Ask the user for status (todo, doing, done)
let status;
while (true) {
  // We change whatever the user typed into lowercase (so "DONE" or "Done" still works).
  status = prompt(
    "enter task ${taskNumber} status (todo, doing, or done)):"
  ).toLowerCase();

  // Check if the user’s answer is one of the allowed words
  if (["todo", "doing", "done"].includes(status)) {
    break; // If it’s correct, stop asking
  } else {
    // If it’s wrong, tells the user and ask again.
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }
}

// create a task object after validation is complete
const NewTask = {
  title: taskTitle,
  description: taskDescription,
  status: taskStatus,
};

// We only need 2 tasks because the project brief says so.
// Call our function twice, one for Task 1 and one for Task 2.
const tasks = [getTaskDetails(1), getTaskDetails(2)];

//use .filter() to make a new list that only has the tasks with status = "done"
const completedTasks = tasks.filter((task) => task.status === "done");

// If there is at least 1 completed task, show them in the console.
if (completedTasks.length > 0) {
  // Show each finished task in the console
  completedTasks.forEach((task) => {
    console.log(`Task Completed: ${task.title} - ${task.status}`);
  });
} else {
  // If no tasks are done, show a motivational message
  // matches the no completed task log.png
  console.log("No tasks completed, let's get to work!");
}
