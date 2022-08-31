const getvalues = document.querySelector('#form1')

getvalues.addEventListener('submit', () => {
    for(let i=0;i<getvalues.elements.length;i++){
        console.log(getvalues.elements[i].value)
    }
})

