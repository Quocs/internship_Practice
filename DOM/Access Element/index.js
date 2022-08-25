var demo = document.getElementById('demo')
var title = document.getElementsByTagName('h2')
var className = document.getElementsByClassName('demo');
var demoQuery = document.querySelector('#demo-query');
var demoQueryAll = document.querySelectorAll('.demo-query-all');

demo.style.border = '1px solid red';
demo.textContent = 'ACCESSS ME BY ID'

for (let i = 0; i < className.length; i++) {
    className[i].style.border = '1px solid green';
}

for (let i = 0; i < title.length; i++) {
    title[i].style.color = 'Red';
}

demoQuery.style.border = '2px solid black';

demoQueryAll.forEach(query => {
    query.style.border = '1px solid green';
});