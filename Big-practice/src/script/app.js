/*
    VARIABLE
*/
const taskInput = document.querySelector('.new-todo');
let todos = JSON.parse(localStorage.getItem("todo-list"));
/*
    Save task in localStorage
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
        showTodo();
    }
    
})

