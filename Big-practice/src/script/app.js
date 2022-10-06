
/**
 *  GET VARIABLE
 */

const taskInput = document.querySelector('.new-todo');
//  getting ul element
const taskBox = document.querySelector('.todo-list');
//  getting li element
const list = taskBox.childNodes;
let editId;
const filters = document.querySelectorAll('.filters span');
//  getting localstorage todo-list
let todos = JSON.parse(localStorage.getItem('todo-list'));
//  getting button clear completed
const clearAll = document.querySelector('.clear-completed');
const todoCount = document.querySelector('strong');
const clickAll = document.querySelector('#toggle-all');
const errorMessage = document.querySelector('#error-Message');
const api = 'http://localhost:3000/todolist';

/**
 * Update status after click check box
 */

const updateStatus = (selectedTask, id) => {
    const taskName = taskBox.childNodes[id];
    if (selectedTask.checked) {
        taskName.classList.add('completed');
        todos[selectedTask.id].status = 'completed';
    } else {
        taskName.classList.remove('completed');
        todos[selectedTask.id].status = 'pending';
    }
    localStorage.setItem('todo-list', JSON.stringify(todos));
};

/**
 * Delete Task
 */

const deleteTask = (deletedId, filter) => {
    todos.splice(deletedId, 1);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo(filter);
};

/**
 *  Edit Task
 */

const editTask = (taskId, taskName, filter) => {
    const listInput = list[taskId].lastElementChild;
    listInput.style.display = 'block';
    listInput.value = taskName;
    editId = taskId;
    listInput.addEventListener('keyup', (e) => {
        const editInputTask = listInput.value.trim();
        if (e.key === 'Enter' && editInputTask) {
            todos[editId].task = listInput.value;
            localStorage.setItem('todo-list', JSON.stringify(todos));
            showTodo(filter);
        }
    });
};

/**
 *  Clear all task completed
 */

clearAll.addEventListener('click', () => {
    if (todos) {
        let filteredList = todos.filter(todo => {
            return todo.status !== 'completed';
        });
        todos = filteredList;
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodo('all');
    }
});

/**
 * FILTER TASK OF THE LIST
 */

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.selected").classList.remove("selected");
        btn.classList.add("selected");
        showTodo(btn.id);
    });
});

/**
 *  SELECT ALL TASK
 */

clickAll.addEventListener('click', (filter) => {
    if (todos) {
        todos.forEach((todo) => {
            if (clickAll.checked) {
                todo.status = 'completed';
            } else {
                todo.status = 'pending';
            }
        });
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodo(filter);
    }
});

/**
 *  SHOWING ALL TASK FROM LOCAL STORAGE
 */

const showTodo = (filter) => {
    let li = '';
    let count = 0;
    if (todos) {
        todos.forEach((todo, id) => {
            // if todostatus is completed set input is checked
            // console.log(filter)
            const isCompleted = todo.status == 'completed' ? 'checked' : '';
            // if todostatus is completed set class li element id completed
            const isTaskCompleted = todo.status == 'completed' ? 'completed' : '';
            if (filter == todo.status || filter == "all") {
                li += `<li class="${isTaskCompleted}">
                        <div class="view">
                        <input onclick="updateStatus(this,${id})" class="toggle" type="checkbox" id="${id}" ${isCompleted}>
                        <label ondblclick="editTask(${id},'${todo.task}','${filter}')">${todo.task}</label>
                        <button class="destroy" onclick="deleteTask(${id},'${filter}')"></  button>
                        </div>
                        <input class="edit">         
                    </li>`;
                //  Count item has status is pending
                if (todo.status == 'pending') {
                    count++;
                }
            }
        });
        todoCount.innerHTML = count;
    }
    taskBox.innerHTML = li;
};
showTodo("all");

/**
 * Fetch API
 */
function fetchData() {
    fetch(api)
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.map(element => {
                todos.push(element);
            })
            localStorage.setItem('todo-list', JSON.stringify(todos));
            showTodo(document.querySelector("span.selected").id);
        })
        .catch(error => {
            console.log(error);
        })
}
fetchData();

/**
 *  SAVE TASK IN LOCALSTORAGE
 */

taskInput.addEventListener('keyup', (e) => {
    const userTask = taskInput.value.trim();
    if (taskInput.value == '' || taskInput.value == null || taskInput.value == ' ') {
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Task must be filled out';
    } else {
        errorMessage.style.display = 'none';
    }
    if (e.key == 'Enter' && userTask) {
        if (!todos) {
            todos = [];
        }
        taskInput.value = '';
        const taskInfo = {
            task: userTask,
            status: 'pending',
        };
        todos.push(taskInfo)
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodo(document.querySelector("span.selected").id);
    }
});
