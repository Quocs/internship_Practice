const tables=document.querySelector('#sampleTable')
const button=document.querySelector('#button')

button.addEventListener('click',()=>{
    const addRow=tables.insertRow(2)
    const addTDLeft=addRow.insertCell(0)
    const addTDright=addRow.insertCell(1)
    addTDLeft.textContent='Thanh Quoc'
    addTDright.textContent='Thanh Toan'
})