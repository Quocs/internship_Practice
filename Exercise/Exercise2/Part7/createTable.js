const button = document.querySelector('#button')

const ltable = document.querySelector('#myTable')

button.addEventListener('click', () => {
    const tableRow = window.prompt('Enter number of row', '1')
    const tableColumn = window.prompt('Enter the number column', '1')

    for (let i = 0; i < parseInt(tableRow, 10); i++) {
        let selectRow = ltable.insertRow(i)
        for (let j = 0; j < parseInt(tableColumn, 10); j++) {
            let selectColum = selectRow.insertCell(j)
            selectColum.textContent=`Row - ${i} ,Column - ${j}`
        }
    }

})