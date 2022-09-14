/*
    GET VARIABLE
*/
const taskInput = document.querySelector('.new-todo');
let todos = JSON.parse(localStorage.getItem("todo-list"));
const taskBox = document.querySelector('.todo-list');
let list = taskBox.childNodes;
let editId;
const filter = document.querySelectorAll('.filters a');
const isAllTask=document.querySelector('#All');
const isPedding=document.querySelector('#pedding');
const isCompleted=document.querySelector('#completed');

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
 *  Edit Task 
 */

const getEdit = (taskId, taskName) => {
    let listInput = list[taskId].lastElementChild;
    listInput.style.display = 'block';
    listInput.value = taskName;
    //console.log(listItem.value);
    editId = taskId;
    listInput.addEventListener('keyup', e => {
        let editInputTask = listInput.value.trim();
        if (e.key == "Enter" && editInputTask) {
            todos[editId].task = listInput.value;
            localStorage.setItem("todo-list", JSON.stringify(todos));
            // console.log(todos[editId].task)
            showTask();
        }
    })
}

/**
 * Filter task of the list
 */

filter.forEach(btn => {
    btn.addEventListener('click', () => {
        //console.log(btn)
        document.querySelector("a.selected").classList.remove("selected");
        btn.classList.add("selected");
        }
    )
})

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
                    <label ondblclick="getEdit(${id},'${todo.task}')">${todo.task}</label>
                    <button class="destroy" onclick="deleteTask(${id})"></button>
                </div>
                <input class="edit">         
            </li>`;
        });
    }
    taskBox.innerHTML = li;
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

