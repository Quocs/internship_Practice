const button=document.querySelector('#jsstyle')

const textStyle=document.querySelector('p')


button.addEventListener('click',()=>{
    textStyle.style.fontFamily='Roboto'
    textStyle.style.fontSize='20px';
    textStyle.style.color='red'
})