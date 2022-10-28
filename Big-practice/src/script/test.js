const taskInput = document.querySelector('.new-todo');
const taskBox = document.querySelector('.todo-list');
const list = this.taskBox.childNodes;
const filters = document.querySelectorAll('.filters span');
const clearAll = document.querySelector('.clear-completed');
const todoCount = document.querySelector('strong');
const clickAll = document.querySelector('#toggle-all');
const errorMessage = document.querySelector('#error-Message');
const todos = JSON.parse(localStorage.getItem('todo-list'));
let editId;

const setItem = () => {
    localStorage.setItem('todo-list', JSON.stringify(this.todos));
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

const clearAllTask = () => {
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
}

const filterTask = () => {
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('span.selected').classList.remove('selected');
            btn.classList.add('selected');
            showTodo(btn.id);
        })
    })
}

const selectAllTask = () => {
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
                <input onclick="test1.updateStatus(this,${id})" class="toggle" type="checkbox" id="${id}" ${isCompleted}>
                <label ondblclick="test1.editTask(${id},'${todo.task}','${filter}')">${todo.task}</label>
                <button class="destroy" onclick="test1.deleteTask(${id},'${filter}')"></  button>
                </div>
                <input class="edit">         
            </li>`;

                if (todo.status == 'pending') {
                    count++;
                }
            }
        })
        test1.todoCount.innerHTML = count;
    }
    test1.taskBox.innerHTML = li;
}
showTodo('all')

class ToDo {
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status;
    }
    updateStatus(selectedTask, id) {
        const taskName = taskBox.childNodes[id];
        if (selectedTask.checked) {
            taskName.classList.add('completed');
            todos[selectAllTask.id].status = 'completed';
        } else {
            taskName.classList.remove('completed');
        }
        setItem();
    }
}   
