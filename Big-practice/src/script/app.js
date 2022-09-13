/*
    GET VARIABLE
*/
const taskInput = document.querySelector('.new-todo');
let todos = JSON.parse(localStorage.getItem("todo-list"));
const taskBox = document.querySelector('.todo-list');
const inputText = document.querySelector('.edit');
/**
 * Show Task saved in localStorage
 */
const showTask = () => {
    let li = "";
    if (todos) {
        todos.forEach((todo, id) => {
            let isCompleted = todo.status == "completed" ? "checked" : "";
            let isTaskCompleted = todo.status == "completed" ? "completed" : "";
            li +=
                `<li class="${isTaskCompleted}">
                <div class="view">
                    <input onclick="updateStatus(this,${id})" class="toggle" type="checkbox" id="${id}" ${isCompleted}>
                    <label class="hello">${todo.task}</label>
                    <button class="destroy" onclick="deleteTask(${id})"></button>
                </div>
                <input class="edit" value="Rule the web">         
            </li>`;
        });
    }
    taskBox.innerHTML = li;
}

/**
 * Update status after click check box
 */
const updateStatus = (selectedTask, id) => {
    // console.log(id)
    let taskName = taskBox.childNodes[id];
    if (selectedTask.checked) {
        taskName.classList.add('completed');
        todos[selectedTask.id].status = "completed";
    }
    else {
        taskName.classList.remove('completed');
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

/**
 * Delete Task
 */
const deleteTask = (deletedId) => {
    // console.log(deletedId);
    todos.splice(deletedId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTask();
}

/**
 *  SAVE TASK IN LOCALSTORAGE
 */
taskInput.addEventListener('keyup', e => {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" && userTask) {
        if (!todos) {
            todos = [];
        }
        taskInput.value = "";

        let taskInfo = {
            task: userTask,
            status: "pending"
        };
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTask();
    }

})

