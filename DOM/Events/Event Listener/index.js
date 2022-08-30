const p = document.querySelector('p')


const alertText = () => {
    alert('Will I alert?');
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
    p.textContent = "Will I change?";
});
button.addEventListener('click', alertText)
// Remove alert function from button element
button.removeEventListener('click', alertText);


