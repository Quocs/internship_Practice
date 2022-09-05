var style=document.querySelectorAll('strong')

var link=document.querySelector('#link')

link.addEventListener('mouseover',()=>{
    style.forEach(query=>{
        query.style.color='green'
    })
})

link.addEventListener('mouseout',()=>{
    style.forEach(query=>{
        query.style.color='black'
    })
})