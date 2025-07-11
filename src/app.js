 const taskList = document.getElementById("task_list");
const taskInput = document.getElementById("task");
const addTask = document.getElementById("addTask");

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  const task = taskInput.value.trim(); // Fixed: should be 'value' not 'ariaValueMax'
  
  if(task) {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${task}</span>
      </label>
      
      <span class="delete-btn"><i class="fa-solid fa-trash"></i></span>
    `;
    
    // Add the new task to the list
    taskList.appendChild(li);
    
    // Clear the input field
    taskInput.value = '';
    
    const deleteButton = li.querySelector(".delete-btn")
    deleteButton.addEventListener("click", function(e){
         li.remove()
    })
    const checkbox = li.querySelector(".task-checkbox")
    checkbox.addEventListener("click", function(e){
      li.classList.toggle("complete", checkbox.check)
    })
  }
});

