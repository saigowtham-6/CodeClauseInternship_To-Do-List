"use strict";
const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }
  const task = `<div class="task">
  <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    </button>
    </div>`;
  tasksContainer.insertAdjacentHTML("beforeend", task);



  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      updateTaskCount(); // Update task count when a task is deleted
    };
  });

  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      let targetElement = e.target;
      if (!(e.target.className == "edit")) {
        targetElement = e.target.parentElement;
      }
      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });
  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkBox) => {
    checkBox.addEventListener("change", () => {
      const taskContainer = checkBox.parentNode; // Get the parent container
      if (checkBox.checked) {
        taskContainer.classList.add("completed"); // Add the completed class
        taskCount -= 1;
      } else {
        taskContainer.classList.remove("completed"); // Remove the completed class
        taskCount += 1;
      }
      displayCount(taskCount);
    });
  });

  taskCount += 1;
  displayCount(taskCount);
  newTaskInput.value = "";
};

const updateTaskCount = () => {
  const tasksCheck = document.querySelectorAll(".task-check");
  taskCount =
    tasksCheck.length -
    Array.from(tasksCheck).filter((checkBox) => checkBox.checked).length;
  displayCount(taskCount);
  console.log(displayCount(taskCount));
  //console.log(displayCount(taskCount));
};




window.onload = () => {
  // Initialize the task count when the page loads
  updateTaskCount();
  newTaskInput.value = "";
};

addBtn.addEventListener("click", addTask);

































// "use strict";
// const addBtn = document.querySelector("#add-btn");
// const newTaskInput = document.querySelector("#wrapper input");
// const tasksContainer = document.querySelector("#tasks");
// const error = document.getElementById("error");
// const countValue = document.querySelector(".count-value");

// const addTask = () => {
//   const taskName = newTaskInput.value.trim();
//   error.style.display = "none";
//   if (!taskName) {
//     setTimeout(() => {
//       error.style.display = "block";
//     }, 200);
//     return;
//   }

//   const task = document.createElement("div");
//   task.className = "task";
//   task.innerHTML = `
//     <input type="checkbox" class="task-check">
//     <span class="taskname">${taskName}</span>
//     <button class="edit">
//       <i class="fa-solid fa-pen-to-square"></i>
//     </button>
//     <button class="delete">
//       <i class="fa-solid fa-trash"></i>
//     </button>
//   `;

//   tasksContainer.appendChild(task);

//   const deleteButtons = document.querySelectorAll(".delete");
//   deleteButtons.forEach((button) => {
//     button.onclick = () => {
//       button.parentNode.remove();
//       updateTaskCount();
//     };
//   });

//   const tasksCheck = document.querySelectorAll(".task-check");
//   tasksCheck.forEach((checkBox) => {
//     checkBox.addEventListener("change", () => {
//       toggleTaskCompletion(checkBox);
//     });
//   });

//   newTaskInput.value = "";
// };

// const toggleTaskCompletion = (checkBox) => {
//   const taskContainer = checkBox.closest(".task");
//   const taskName = taskContainer.querySelector(".taskname");

//   if (checkBox.checked) {
//     taskName.classList.add("completed");
//   } else {
//     taskName.classList.remove("completed");
//   }

//   updateTaskCount();
// };

// const updateTaskCount = () => {
//   const completedTasks = document.querySelectorAll(".taskname.completed");
//   countValue.innerText = completedTasks.length;
// };

// window.onload = () => {
//   // Initialize the task count when the page loads
//   updateTaskCount();
//   newTaskInput.value = "";
// };

// addBtn.addEventListener("click", addTask);










// const addBtn = document.querySelector("#add-btn");
// const newTaskInput = document.querySelector("#wrapper input");
// const tasksContainer = document.querySelector("#tasks");
// const error = document.getElementById("error");
// const countValue = document.querySelector(".count-value");
// let taskCount = 0;

// const displayCount = (taskCount) => {
//   countValue.innerText = taskCount;
// };

// const addTask = () => {
//   const taskName = newTaskInput.value.trim();
//   error.style.display = "none";
//   if (!taskName) {
//     setTimeout(() => {
//       error.style.display = "block";
//     }, 200);
//     return;
//   }
//   const task = `<div class="task">
//   <input type="checkbox" class="task-check">
//     <span class="taskname">${taskName}</span>
//     <button class="edit">
//     <i class="fa-solid fa-pen-to-square"></i>
//     </button>
//     <button class="delete">
//     <i class="fa-solid fa-trash"></i>
//     </button>
//     </div>`;
//   tasksContainer.insertAdjacentHTML("beforeend", task);
//   const deleteButtons = document.querySelectorAll(".delete");

//   deleteButtons.forEach((button) => {
//     button.onclick = () => {
//       button.parentNode.remove();
//       taskCount -= 1;
//       displayCount(taskCount);
//     };
//   });

//   const editButtons = document.querySelectorAll(".edit");
//   editButtons.forEach((editBtn) => {
//     editBtn.onclick = (e) => {
//       let targetElement = e.target;
//       if (!(e.target.className == "edit")) {
//         targetElement = e.target.parentElement;
//       }
//       newTaskInput.value = targetElement.previousElementSibling?.innerText;
//       targetElement.parentNode.remove();
//       taskCount -= 1;
//       displayCount(taskCount);
//     };
//   });
//   const tasksCheck = document.querySelectorAll(".task-check");
//   tasksCheck.forEach((checkBox) => {
//     checkBox.addEventListener('change', () => {
//       checkBox.nextElementSibling.classList.toggle("completed");
//       if (checkBox.checked) {
//         taskCount -= 1;
//       } else {
//         taskCount += 1;
//       }
//       displayCount(taskCount);
//     });
//   });
//   taskCount += 1;
//   displayCount(taskCount);
//   newTaskInput.value = "";
// };

// window.onload=()=>{
//   taskCount=0;
//   displayCount(taskCount);
//   newTaskInput.value="";

// }

// const addTask = () => {
//   const taskName = newTaskInput.value.trim();
//   error.style.display = "none";
//   if (!taskName) {
//     setTimeout(() => {
//       error.style.display = "block";
//     }, 200);
//     return;
//   }
//   const task = `<div class="task">
//   <input type="checkbox" class="task-check">
//     <span class="taskname">${taskName}</span>
//     <button class="edit">
//     <i class="fa-solid fa-pen-to-square"></i>
//     </button>
//     <button class="delete">
//     <i class="fa-solid fa-trash"></i>
//     </button>
//     </div>`;
//   tasksContainer.insertAdjacentHTML("beforeend", task);
//   const deleteButtons = document.querySelectorAll(".delete");

//   deleteButtons.forEach((button) => {
//     button.onclick = () => {
//       button.parentNode.remove();
//       taskCount -= 1;
//       displayCount(taskCount);
//     };
//   });

//   const editButtons = document.querySelectorAll(".edit");
//   editButtons.foreach((editBtn) => {
//     editBtn.onclick = (e) => {
//       let targetElement = e.target;
//       if (!(e.target.className == "edit")) {
//         targetElement = e.target.parentElement;
//       }
//       newTaskInput.value = targetElement.previousElementSibling?.innerText;
//       targetElement.parentNode.remove();
//       taskCount -= 1;
//       displayCount(taskCount);
//     };
//   });
//   const tasksCheck = document.querySelectorAll(".task-check");
//   tasksCheck.forEach((checkBox) => {
//     checkBox.onChange = () => {
//       checkBox.nextElementSibling.classList.toggle("completed");
//       if (checkBox.checked) {
//         taskCount -= 1;
//       } else {
//         taskCount += 1;
//       }
//       displayCount(taskCount);
//     };
//   });
//   taskCount += 1;
//   displayCount(taskCount);
//   newTaskInput.value = " ";
// };

//addBtn.addEventListener("click", addTask);
