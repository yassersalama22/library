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
}

// add some test data 
addBook('The Great Gatsby', 'F. Scott Fitzgerald');
addBook('To Kill a Mockingbird', 'Harper Lee');

displayBooks();