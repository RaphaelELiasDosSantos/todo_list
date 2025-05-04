function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="remove" onclick="removeTask(this)">Delete</button>
      `;
      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
    }
  }
  
  function toggleComplete(element) {
    element.parentElement.classList.toggle("completed");
  }
  
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  