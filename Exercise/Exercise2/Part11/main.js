var myImage = ['./Strawberry-Attack_4.jpg', './ROG-Zephyrus-Duo_3840x2400_main_screen.jpg'];

var button = document.querySelector('#idstyle');
var showImage = document.querySelector('#ShowImgae');
var randomNum = Math.floor(Math.random() * myImage.length);
button.addEventListener('click', () => {
    var randomNum = Math.floor(Math.random() * myImage.length);
    showImage.src=myImage[randomNum];

})