const taskInput = document.querySelector('.new-todo');
const taskBox = document.querySelector('.todo-list');
const list = this.taskBox.childNodes;
const filters = document.querySelectorAll('.filters span');
const clearAll = document.querySelector('.clear-completed');
const todoCount = document.querySelector('strong');
const clickAll = document.querySelector('#toggle-all');
const errorMessage = document.querySelector('#error-Message');
let editId;

class User{
    constructor(task,status){
        this.task=task;
        this.status=status;
    }
    updateStatus(selectAllTask,id){

    }
    deleteTask(deletedId,filter){

    }
    editTask(taskId,taskName,filter){

    }
    clearAllTask(){

    }
    selectAllTask(){

    }
}

class ToDO{
    constructor(){
        this.todos = JSON.parse(localStorage.getItem('todo-list'));
    }
    SetItem(){

    }
    filterTask(){

    }
    showTodo(){

    }
    SaveTask(){
        
    }
}   
