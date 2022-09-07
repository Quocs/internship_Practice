const button=document.querySelector('button')

const link=document.querySelector('#w3r')

const links=link.attributes

button.addEventListener('click',()=>{
    for(var i=0;i<links.length;i++){
        alert(`${links[i].name} have ${links[i].value}`)
    }
})
