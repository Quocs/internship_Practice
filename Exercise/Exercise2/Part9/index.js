var selected = document.querySelector('#colorSelect')
var button = document.querySelector('#button')

button.addEventListener('click', () => {
    alert('There are ' + selected.length + ' item in this list');
    for(let i=0;i<selected.length;i++){
        alert(`Content of option ${i} is ${selected[i].textContent}`)
    }
})