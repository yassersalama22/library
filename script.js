class Book {
    constructor(title,author,numberOfPages,read){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

let books = [];

// Function to add a book to the books array
function addBook(title, author, numberOfPages, read) {
    const book = new Book(title, author, numberOfPages, read);
    books.push(book);
    displayBooks(); // Update the display after adding a book
}

// Function to toggle the read status of a book by index
function toggleReadStatus(index) {
    books[index].toggleReadStatus();
    displayBooks(); // Update the display after toggling read status
}

// Function to delete book
function removeBook(index) {
    books.splice(index, 1);
    displayBooks();
}

// Function to display books
function displayBooks() {
    console.table(books);

    const booksList = document.getElementById('book-list');
    booksList.innerHTML = ''; // Clear previous list

    books.forEach((book,index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <small>Pages: ${book.numberOfPages}</small>
            <p>${book.read ? 'Read' : 'Unread'}</p>
            <button class="toggle-read-btn" data-index="${index}">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            <button class="remove-book-btn" data-index="${index}">Remove</button>
        `;
        booksList.appendChild(bookItem);
    });

    document.querySelectorAll('.toggle-read-btn').forEach(button=>{
        button.addEventListener('click',(event) => {
            const index = event.target.getAttribute('data-index');
            toggleReadStatus(index);
        });
    });

    document.querySelectorAll('.remove-book-btn').forEach(button => {
        button.addEventListener('click',(event) => {
            const index = event.target.getAttribute('data-index');
            removeBook(index);
        });
    
    });
}

// Function to handle new book submission
function handleFormSubmit(event){
    event.preventDefault(); // prevent the form from submitting 

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value,10);
    const read = document.getElementById('read').checked;

    addBook(title,author,pages,read);

    document.getElementById('new-book-form').reset();

    document.getElementById('book-dialog').close();
}

// Listen to add new book button click
document.getElementById('add-book-btn').addEventListener('click',() => {
    document.getElementById('book-dialog').showModal();
});

// Listen to close add book dialog
document.getElementById('close-dialog-btn').addEventListener('click',()=>{
    document.getElementById('book-dialog').close();
});

// Listen to submit new book click
document.getElementById('new-book-form').addEventListener('submit', handleFormSubmit);

// Add some test data
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180, false);
addBook('To Kill a Mockingbird', 'Harper Lee', 281, true);
