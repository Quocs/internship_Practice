const api_posts = 'http://localhost:3000/posts';
const api_quote = 'http://localhost:3000/quote';
const api_list = 'http://localhost:3000/list';

let link = '';
let quote = '';
let listx = '';

async function getDataAsideHeader() {
    const response = await fetch(api_posts);
    const data = await response.json();
    data.forEach((element) => {
        link += `
        <h5>${element.title}</h5>
        <a href=${element.linkSource}>${element.subTitle2}</a>, 
        <a href=${element.linkDemo}>${element.subTitle}</a>
        `;
    });
    document.querySelector('span').innerHTML = link;
}

async function getDataAsideQuote() {
    const response = await fetch(api_quote);
    const data = await response.json();
    data.forEach((element) => {
        quote += `
        <p>${element.description}${element.description2}${element.description3}</p>
        <footer>
            <a href='${element.link}>${element.title}</a>
        </footer> `
    })
    document.querySelector('blockquote').innerHTML = quote;
}

async function getDataAsideList() {
    const response = await fetch(api_list);
    const data = await response.json();
    data.forEach((element) => {
        listx += `
            <h4>${element.title}</h4>
            <ul>
                <li>${element.list}</li>
                <li>${element.list1}</li>
                <li>${element.list2}</li>
                <li>${element.list3}</li>
            </ul>
        `
    })
    document.querySelector('.recource').innerHTML = listx;
}

getDataAsideList();
getDataAsideQuote();
getDataAsideHeader();
