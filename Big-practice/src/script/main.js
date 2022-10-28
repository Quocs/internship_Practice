// const api = 'http://localhost:3000/todolist';
class ToDo {
    constructor() {
        this.taskInput = document.querySelector('.new-todo');
        this.taskBox = document.querySelector('.todo-list');
        this.list = this.taskBox.childNodes;
        this.filters = document.querySelectorAll('.filters span');
        this.clearAll = document.querySelector('.clear-completed');
        this.todoCount = document.querySelector('strong');
        this.clickAll = document.querySelector('#toggle-all');
        this.errorMessage = document.querySelector('#error-Message');
        this.todos = JSON.parse(localStorage.getItem('todo-list'));
        this.editId;
    }
    SetItem() {
        localStorage.setItem('todo-list', JSON.stringify(this.todos));
    }
    /**
     * UPDATE STATUS
     */
    updateStatus(selectedTask, id) {
        const taskName = this.taskBox.childNodes[id];
        if (selectedTask.checked) {
            taskName.classList.add('completed');
            this.todos[selectedTask.id].status = 'completed';
        } else {
            taskName.classList.remove('completed');

        }
        this.SetItem();
    }

    /**
     * DELETE TASK
     */

    deleteTask(deletedId, filter) {
        this.todos.splice(deletedId, 1);
        this.SetItem();
        showTodo(filter);
    }

    /**
     * EDIT TASK
     */

    editTask(taskId, taskName, filter) {
        const listInput = this.list[taskId].lastElementChild;
        listInput.style.display = 'block';
        listInput.value = taskName;
        this.editId = taskId;
        listInput.addEventListener('keyup', (e) => {
            const editInputTask = listInput.value.trim();
            if (e.key === 'Enter' && editInputTask) {
                this.todos[this.editId].task = listInput.value;
                this.SetItem();
                showTodo(filter);
            }
        })
    }

    /**
     * CLEAR ALL TASK
     */
    clearAllTask() {
        this.clearAll.addEventListener('click', () => {
            if (this.todos) {
                let filteredList = this.todos.filter(todo => {
                    return todo.status !== 'completed';
                });
                this.todos = filteredList;
                this.SetItem();
                showTodo('all');
            }
        })
    }

    /**
     * FILTER TASK
     */

    filterTask() {
        this.filters.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector("span.selected").classList.remove("selected");
                btn.classList.add("selected");
                showTodo(btn.id);
            })
        })
    }

    /**
     * SELECT ALL TASK
     */

    selectAllTask() {
        this.clickAll.addEventListener('click', (filter) => {
            if (this.todos) {
                this.todos.forEach((todo) => {
                    if (this.clickAll.checked) {
                        todo.status = 'completed';
                    } else {
                        todo.status = 'pending';
                    }
                    this.SetItem();
                    showTodo(filter);
                })
            }
        })
    }
}

let test1 = new ToDo();
test1.clearAllTask();
test1.filterTask();
test1.selectAllTask();

function showTodo(filter) {
    let li = '';
    let count = 0;
    if (test1.todos) {
        test1.todos.forEach((todo, id) => {
            // if todostatus is completed set input is checked
            const isCompleted = todo.status == 'completed' ? 'checked' : '';
            // if todostatus is completed set class li element id completed
            const isTaskCompleted = todo.status == 'completed' ? 'completed' : '';
            if (filter == todo.status || filter == "all") {
                li += `<li class="${isTaskCompleted}">
                        <div class="view">
                        <input onclick="test1.updateStatus(this,${id})" class="toggle" type="checkbox" id="${id}" ${isCompleted}>
                        <label ondblclick="test1.editTask(${id},'${todo.task}','${filter}')">${todo.task}</label>
                        <button class="destroy" onclick="test1.deleteTask(${id},'${filter}')"></  button>
                        </div>
                        <input class="edit">         
                    </li>`;
                //  Count item has status is pending
                if (todo.status == 'pending') {
                    count++;
                }
            }
        });
        test1.todoCount.innerHTML = count;
    }
    test1.taskBox.innerHTML = li;
};
showTodo("all");

// /**
//  *  SAVE TASK IN LOCALSTORAGE
//  */

test1.taskInput.addEventListener('keyup', (e) => {
    const userTask = test1.taskInput.value.trim();
    //Form validation
    if (test1.taskInput.value == '' || test1.taskInput.value == null || test1.taskInput.value == ' ') {
        test1.errorMessage.style.display = 'block';
        test1.errorMessage.style.color = 'red';
        test1.errorMessage.textContent = 'Task must be filled out';
    } else {
        test1.errorMessage.style.display = 'none';
    }
    if (e.key == 'Enter' && userTask) {
        if (!test1.todos) {
            test1.todos = [];
        }
        test1.taskInput.value = '';
        const taskInfo = {
            task: userTask,
            status: 'pending',
        };
        test1.todos.push(taskInfo)
        localStorage.setItem('todo-list', JSON.stringify(test1.todos));
        showTodo(document.querySelector("span.selected").id);
    }
});