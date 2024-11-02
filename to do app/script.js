const gradients = [
    "gradient1", "gradient2", "gradient3", "gradient4", "gradient5"
  ];
  
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      const listItem = document.createElement("li");
  
      const taskText = document.createElement("span");
      taskText.textContent = taskInput.value;
  
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "✖";
      deleteButton.onclick = function () {
        listItem.classList.add("task-complete");
        setTimeout(() => taskList.removeChild(listItem), 300);
      };
  
      // Assign a random gradient class to each task item
      const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
      listItem.classList.add(randomGradient);
  
      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
  
      taskInput.value = "";
    }
  }
  