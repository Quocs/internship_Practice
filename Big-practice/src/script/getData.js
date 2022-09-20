const api_posts = "http://localhost:3000/posts";
let li = "";
async function getDataAsideHeader() {
    const response = await fetch(api_posts);
    const data = await response.json();
    data.forEach((element) => {
        li += `
        <h5>${element.title}</h5>
        <a href=${element.linkSource}>${element.subTitle2}</a>, 
        <a href=${element.linkDemo}>${element.subTitle}</a>
        `;
    });
    document.querySelector("span").innerHTML = li;
}
getDataAsideHeader();
