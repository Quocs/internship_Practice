const button=document.querySelector('button')

button.addEventListener('click',()=>{
    const paragraph=document.querySelectorAll('p')
    paragraph.forEach(query=>{
        query.style.background='#e5e5e5'
    })
})