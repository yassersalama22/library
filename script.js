let books = [];

// add book to books storage
function addBook(title,author){
    const book = {
        title: title,
        author: author
    }

    books.push(book);
}

function displayBooks(){
    console.table(books);

    const booksList = document.getElementById('book-list');
    booksList.inneHtml = '';

    books.forEach(book=>{
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
        booksList.appendChild(bookItem);
    });

}

// add some test data 
addBook('The Great Gatsby', 'F. Scott Fitzgerald');
addBook('To Kill a Mockingbird', 'Harper Lee');

displayBooks();