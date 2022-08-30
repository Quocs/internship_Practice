const demoID = document.querySelector("#demo-id");
demoID.textContent = "Hello thanh Quoc";

const demoClass = document.querySelectorAll(".demo-class ");
demoClass.forEach((element) => {
  element.textContent = "All demo classes updated.";
});

//Modifying Attributes
const img = document.querySelector("img");

img.hasAttribute("src");
img.getAttribute("src");
//img.removeAttribute('src');

const changeImg = () => {
  img.setAttribute("src", "./baola.jpg");
};

const ResetImg = () => {
  img.setAttribute("src", "./download.jpg");
};

//Modifying Classes
const div = document.querySelector("div");

div.className = "warning";

const activeDiv = document.querySelector(".active");
activeDiv.classList.add("hidden");
activeDiv.classList.remove("hidden");
activeDiv.classList.toggle("hidden");
activeDiv.classList.toggle("hidden");
//activeDiv.classList.replace('active','warning')

//Modifying Style
const xxx=document.querySelector('#borderx');

//xxx.setAttribute('style', 'text-align: center');

// Make div into a circle and vertically center the text
xxx.style.borderRadius = '50%';
xxx.style.display = 'flex';
xxx.style.justifyContent = 'center';
xxx.style.alignItems = 'center';