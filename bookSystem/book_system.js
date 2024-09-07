// Initialize an empty array to store book objects
let books = [];

// Function to add a book to the books array
function addBook() {
    // Get the value of the book name from the input field with id 'bookName'
    const bookName = document.getElementById('bookName').value;
    // Get the value of the author name from the input field with id 'authorName'
    const authorName = document.getElementById('authorName').value;
    // Get the value of the book description from the input field with id 'bookDescription'
    const bookDescription = document.getElementById('bookDescription').value;
    // Get the value of the number of pages from the input field with id 'pagesNumber' and convert it to an integer
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Check if all fields are filled and pagesNumber is a valid number
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // Create a book object with the input values
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        // Add the book object to the books array
        books.push(book);
        // Call the function to display the books (assumed to be defined elsewhere)
        showbooks();
        // Call the function to clear the input fields (assumed to be defined elsewhere)
        clearInputs();
    } else {
        // Alert the user to fill in all fields correctly if validation fails
        alert('Please fill in all fields correctly.');
    }
}
// Function to display the books in the books array
function showbooks() {
    // Map over the books array to create an array of HTML strings for each book
    const booksDiv = books.map((book, index) => 
        `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
    );
    // Join the array of HTML strings into a single string and set it as the innerHTML of the element with id 'books'
    document.getElementById('books').innerHTML = booksDiv.join('');
}
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}