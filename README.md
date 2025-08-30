# Kanban Task Management: Task Input and Status Validation System

## 📌Project Description

This project is a web-based Kanban task management tool designed to help users organise and track their work visually.

The interface is built with clean, semantic HTML and styled with CSS to resemble a professional Kanban board. The JavaScript logic handles user prompts, validates inputs, and outputs results to the console.
---

## ✨ Features
- **Interactive Task Input** - On page load, the application automatically prompts the user to enter a title, description, and status for two tasks.
- **Status Validation** - Only three statuses are accepted: todo, doing, or done. If the user enters anything else, an alert appears and they must try again.
- **Case-Insensitive Handling** - Status entries like "Todo", "DONE", or "Doing" are all accepted and converted to lowercase for consistency.
- **Console Output** If there are completed tasks (status: "done"), their title and status are displayed in the console.
- **Clean, Maintainable Code** - HTML, CSS, and JavaScript are separated into dedicated files, following best practices for readability and maintainability.




### Technologies

- **HTML5** – Semantic structure and layout.
- **CSS3** – Styling, colours, and responsive design.
- **JavaScript (ES6)** – Dynamic functionality, prompts, validation, and console output.


## Code Quality & Maintainability

- Use descriptive variable names to enhance readability and maintainability.
- Include clear comments explaining complex logic and functionality for easier understanding.

## Expected Outcome

A functional task entry system that ensures accurate data collection, validation, and structured storage while maintaining clean and well-documented code for easy future modifications.

**Prompt Input Example**

- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

  ![title prompt](./explainer-images/title%20prompt.png)

**Invalid status**

- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

  ![invalid status](./explainer-images/invalid%20status.png)

**Console log**

- When there is a completed task:

  ![invalid status](./explainerimages/completed%20task%20log.png)

- When there are no completed tasks:

  ![invalid status](./explainer-images/no%20completed%20tasks%20log.png)
