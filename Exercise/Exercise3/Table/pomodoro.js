let task = [];
const pomodoroForm = document.querySelector('#js-add-task');
const pomodoroTableBody = document.querySelector('#js-task-table-body');

pomodoroForm.addEventListener('submit', event => {
    event.preventDefault();
    const taskName = document.querySelector('#js-task-name').value;
    const pomodoroCount = document.querySelector('#js-pomodoro-count').value
    task.push({
        taskName,
        pomodoroDone: 1,
        pomodoroCount,
        finished: false
    });
    //this.reset()
    renderTasks(pomodoroTableBody, task)
})

const renderTasks = (tBodyNode, task = []) => {
    tBodyNode.innerHTML = task.map((task, id) => `
    <tr>
        <td class='cell-task-name'>
            ${task.taskName}
        </td>
        <td class='cell-pom-count'>
            ${task.pomodoroDone}/${task.pomodoroCount} pomodori
        </td>
        <td class="cell-pom-controls">
            ${task.finished ? 'Finished' : `
            <button class='js-task-done' data-id='${id}'>Done</button>
            <button class='js-increase-pomodoro' data-id='${id}'>Increase Pomodoro Count</button>`
        }
            <button class='js-delete-task' data-id='${id}'>Delete Task</button>
        </td>
    </tr>    
    `).join('');
    addTaskEventListeners();
}


const finishTask = (e) => {
    const taskId = e.target.dataset.id;
    task[taskId].finished = true;
    renderTasks(pomodoroTableBody, task);
}
const increasePomodoroDone = (e) => {
    const taskId = e.target.dataset.id;
    task[taskId].pomodoroDone += 1;
    renderTasks(pomodoroTableBody, task);
}
const deleteTask = (e) => {
    const taskId = e.target.dataset.id;
    task.splice(taskId, 1);
    renderTasks(pomodoroTableBody, task);
}
const addTaskEventListeners = () => {
    document.querySelectorAll('#js-task-table-body .js-increase-pomodoro').forEach(button =>
        button.addEventListener('click', increasePomodoroDone)
    );
    document.querySelectorAll('#js-task-table-body .js-task-done').forEach(button =>
        button.addEventListener('click', finishTask)
    );
    document.querySelectorAll('#js-task-table-body .js-delete-task').forEach(button =>
        button.addEventListener('click', deleteTask)
    )
}
