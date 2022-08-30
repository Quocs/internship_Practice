/*
Change the body style so it has a font-family of "Arial, sans-serif".
*/
document.body.style.fontFamily='Arial, sans-serif';

//variable
const nickname=document.querySelector('#nickname');
const favorites=document.querySelector('#favorites');
const hometown=document.querySelector('#hometown');
/*
Replace each of the spans (nickname, favorites, hometown) with your own information.
*/
document.addEventListener('keydown',()=>{
    nickname.textContent='Thanh Quoc'
    favorites.textContent='Eggs'
    hometown.textContent='521 Nui Thanh'
})
/*
Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
*/
const ul=document.querySelector('ul')
for(let element of ul.children){
    element.getAttribute('class')
    element.setAttribute('class','listitem')
    element.style.color='red'
}

/*
Create a new img element and set its src attribute to a picture of you. Append that element to the page.
*/
const image=document.createElement('img')
image.getAttribute('alt')
image.setAttribute('alt','this is image')
image.getAttribute('src')
image.setAttribute('src','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')

document.body.appendChild(image)