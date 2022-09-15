/** 
 *  GET VARIABLE
*/
const taskInput = document.querySelector('.new-todo');
//  getting ul element
const taskBox = document.querySelector('.todo-list');
//  getting li element
let list = taskBox.childNodes;
let editId;
const filters = document.querySelectorAll('.filters span');
//  getting localstorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));
//  getting button clear completed
const clearAll = document.querySelector('.clear-completed');
const todoCount = document.querySelector('strong');

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
    showTask("all");
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
            showTask("all");
        }
    })
}
/**
 *  Clear all task completed
 */
clearAll.addEventListener('click', () => {
    if (todos) {
        todos.forEach((todo, id) => {
            //console.log(todo.status)
            if (todo.status == "completed") {
                //console.log(id);
                todos.splice(id, 1);
            }
            localStorage.setItem("todo-list", JSON.stringify(todos));
            showTask("all");
        })
    }
})

/**
 * Filter task of the list
 */
filters.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector("span.selected").classList.remove("selected");
        btn.classList.add("selected");
        showTask(btn.id);
    })
})

/**
 *  Count Item
 */
// todoCount.addEventListener('load',()=>{

//     if (todos) {
//         todos.forEach((todo, id) => {
//             if(todo.status=="pending"){
//                 count++;
//             }
//         })
//         todoCount.innerHTML=count;
//     }
// })
/**
* Show Task saved in localStorage
*/

const showTask = (Filter) => {
    let li = "";
    let count = 0;
    if (todos) {
        todos.forEach((todo, id) => {
            //if todostatus is completed set input is checked
            let isCompleted = todo.status == "completed" ? "checked" : "";
            //if todostatus is completed set class li element id completed
            let isTaskCompleted = todo.status == "completed" ? "completed" : "";
            if (Filter == todo.status || Filter == "all") {
                li +=
                    `<li class="${isTaskCompleted}">
                <div class="view">
                    <input onclick="updateStatus(this,${id})" class="toggle" type="checkbox" id="${id}" ${isCompleted}>
                    <label ondblclick="getEdit(${id},'${todo.task}')">${todo.task}</label>
                    <button class="destroy" onclick="deleteTask(${id})"></button>
                </div>
                <input class="edit">         
            </li>`;
            };
            if (todo.status == "pending") {
                count++;
            }

        });
        todoCount.innerHTML = count;
    }
    taskBox.innerHTML = li;
}
showTask("all");

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
        showTask("all");
    }

})

