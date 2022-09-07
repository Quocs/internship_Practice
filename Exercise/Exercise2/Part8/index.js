var selected=document.querySelector('#colorSelect')
var button=document.querySelector('#button')

button.addEventListener('click',()=>{
    selected.remove(selected.selectedIndex)
})