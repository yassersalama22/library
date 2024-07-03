let books = [];

// Function to add a book to the books array
function addBook(title, author, numberOfPages) {
    const book = {
        title: title,
        author: author,
        numberOfPages: numberOfPages
    };

    books.push(book);
    displayBooks(); // Update the display after adding a book
}

// Function to display books
function displayBooks() {
    console.table(books);

    const booksList = document.getElementById('book-list');
    booksList.innerHTML = ''; // Clear previous list

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <small>Pages: ${book.numberOfPages}</small>
        `;
        booksList.appendChild(bookItem);
    });
}

// Add some test data
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);
addBook('To Kill a Mockingbird', 'Harper Lee', 281);
