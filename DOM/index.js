let navLink = document.getElementById('nav')
navLink.href='https://www.wikipedia.org'
navLink.textContent='Hello Word'


let button=document.getElementById('changeBackground')

button.addEventListener('click',()=>{
    document.body.style.background='fuchsia'
})

let reset_button = document.getElementById('Resetbackground')

reset_button.addEventListener('click',()=>{
    document.body.style.background='none';
})