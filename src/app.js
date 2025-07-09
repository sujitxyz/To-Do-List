 const taskList = document.getElementById("task_list")

 const taskInput = document.getElementById("task")

 const addTask = document.getElementById("addTask")

 
 addTask.addEventListener("click", (e)=>{
   e.preventDefault()
   const task = taskInput.ariaValueMax.trim();
   if(task){
    const li = document.createElement("li")
   li.innerHTML = `
  <label>
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="edit-btn">Edit</span>
  <span class="delete-btn">Delete</span>
`;
   }
   taskList.appendChild(li)
 })

 