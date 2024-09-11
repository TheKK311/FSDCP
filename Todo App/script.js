// Select the task list container
const list = document.querySelector(".lists");

// Select the input field
const input = document.getElementById("addList");

// Add event listener for the "Add" button
document.getElementById("btn").addEventListener("click", () => {
    // Get the value of the input field
    const newList = input.value;

    // Create HTML for the new task with buttons
    const newTaskHTML = `
        <ol>
            <li>
                <span class="task-text">${newList}</span> <!-- Wrap the task text in a span -->
                <button class="remove">X</button>
                <button class="edit">Edit</button>
                <button class="done">Done</button>
            </li>
        </ol>`;

    // Append the new task HTML to the task list container
    list.innerHTML += newTaskHTML;

    // Clear the input field after adding the task
    input.value = "";
});

// Add event listener for the task list container to handle button clicks
list.addEventListener("click", (e) => {
    // If the "Done" button is clicked
    if (e.target.classList.contains("done")) {
        // Get the parent task element
        const task = e.target.parentNode;
        // Apply a line-through style to the task text
        task.querySelector("span").style.textDecoration = "line-through";
    }
    // If the "Edit" button is clicked
    if (e.target.classList.contains("edit")) {
        // Get the task text span element
        const taskText = e.target.parentNode.querySelector("span");
        // Make the task text editable
        taskText.contentEditable = true;
        // Focus on the task text for editing
        taskText.focus();
    }
    // If the "Remove" button is clicked
    if (e.target.classList.contains("remove")) {
        // Remove the parent task element
        e.target.parentNode.remove();
    }
});
