const button=document.querySelector('button')
const image=document.querySelector('#image')
button.addEventListener('click',()=>{
    image.setAttribute('src','./after-change.png')
})

button.addEventListener('dblclick',()=>{
    image.removeAttribute('src');
    image.getAttribute('src');
    image.setAttribute('src','./before-change.png')
})