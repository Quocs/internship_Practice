var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }];


// console.log(books)
/*
Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
*/
for (let i = 0; i < books.length; i++) {
    var bookP = document.createElement('p')
    var Description = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookP.appendChild(Description)
    document.body.appendChild(bookP)
}

/*
Bonus_1
*/
var booklist = document.createElement('ul')
for (let i = 0; i < books.length; i++) {
    const listitem = document.createElement('li')
    var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    listitem.appendChild(bookDescription)
    booklist.appendChild(listitem)

    if(books[i].alreadyRead){
     listitem.style.color='red'   
    }
}
document.body.appendChild(booklist)
