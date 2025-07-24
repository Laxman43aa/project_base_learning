function addTask(){
const input = document.querySelector(".taskinput");
const taskText = input.value.trim();
if(taskText === ""){
   alert("please enter a task");
   return;
}
const taskList = document.querySelector("#taskList");

const li = document.createElement("li")
li.textContent = taskText;

li.addEventListener("click", () =>{
   li.classList.toggle("completed");
});

const delBtn = document.createElement("button");
delBtn.innerHTML = "❌";
delBtn.className = "delete-btn";
delBtn.addEventListener("click",(e)=>{
e.stopPropagation();
li.remove();
});
li.appendChild(delBtn);
taskList.appendChild(li);

input.value ="";
}

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click",()=>{
   addTask();
})
