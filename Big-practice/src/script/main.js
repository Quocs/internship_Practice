const taskInput = document.querySelector('.new-todo');
const taskBox = document.querySelector('.todo-list');
const list = taskBox.childNodes;
const filters = document.querySelectorAll('.filters span');
const clearAll = document.querySelector('.clear-completed');
const todoCount = document.querySelector('strong');
const clickAll = document.querySelector('#toggle-all');
const errorMessage = document.querySelector('#error-Message');
let todos = JSON.parse(localStorage.getItem('todo-list'));
let editId;

const setItem = () => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
}

const deleteTask = (deletedId, filter) => {
    todos.splice(deletedId, 1);
    setItem();
    showTodo(filter)
}

const editTask = (taskId, taskName, filter) => {
    const listInput = list[taskId].lastElementChild;
    listInput.style.display = 'block';
    listInput.value = taskName;
    editId = taskId;
    listInput.addEventListener('keyup', (e) => {
        const editInputTask = listInput.value.trim();
        if (e.key == 'Enter' && editInputTask) {
            todos[editId].task = listInput.value;
            setItem();
            showTodo(filter);
        }
    })
}


clearAll.addEventListener('click', () => {
    if (todos) {
        let filteredList = todos.filter(todo => {
            return todo.status != 'completed';
        });
        todos = filteredList;
        setItem();
        showTodo('all');
    }
})

filters.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('span.selected').classList.remove('selected');
        btn.classList.add('selected');
        showTodo(btn.id);
    })
})

clickAll.addEventListener('click', (filter) => {
    if (todos) {
        todos.forEach((todo) => {
            if (clickAll.checked) {
                todo.status = 'completed';
            } else {
                todo.status = 'pending';
            }
            setItem();
            showTodo(filter);
        })
    }
})

const updateStatus = (selectedTask, id) => {
    const taskName = taskBox.childNodes[id];
    if (selectedTask.checked) {
        taskName.classList.add('completed');
        todos[selectedTask.id].status = 'completed';
    } else {
        taskName.classList.remove('completed');
    }
    setItem();
}

const showTodo = (filter) => {
    let li = '';
    let count = 0;
    if (todos) {
        todos.forEach((todo, id) => {
            const isCompleted = todo.status == 'completed' ?
                'checked' : '';
            const isTaskCompleted = todo.status == 'completed' ?
                'completed' : '';
            if (filter == todo.status || filter == 'all') {
                li += `<li class="${isTaskCompleted}">
                <div class="view">
                <input onclick="updateStatus(this,${id})" class="toggle" type="checkbox" id="${id}" ${isCompleted}>
                <label ondblclick="editTask(${id},'${todo.task}','${filter}')">${todo.task}</label>
                <button class="destroy" onclick="deleteTask(${id},'${filter}')"></  button>
                </div>
                <input class="edit">         
            </li>`;
                if (todo.status == 'pending') {
                    count++;
                }
            }
        })
        todoCount.innerHTML = count;
    }
    taskBox.innerHTML = li;
}
showTodo('all');

class ToDo {
    constructor(task, status) {
        this.task = task;
        this.status = status;
    }
    addToDo() {
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodo(document.querySelector("span.selected").id);
    }
}

taskInput.addEventListener('keyup', (e) => {
    const userTask = taskInput.value.trim();
    if (taskInput.value == '' || taskInput.value == null || taskInput.value == ' ') {
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Task must be filled out';
    }
    else {
        errorMessage.style.display = 'none';
    }
    if (e.key == 'Enter' && userTask) {
        if (!todos) {
            todos = [];
        }
        taskInput.value = '';
        const todolist = new ToDo(userTask, 'pending');
        todos.push(todolist);
        todolist.addToDo();
    }
})

class Data {
    constructor(api) {
        this.api = api;
    }
    getData() {
        fetch(this.api)
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
}

const data = new Data('http://localhost:3000/todolist');
data.getData();
