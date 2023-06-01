interface Book {
    title: string;
    author: string;
  }
  
  const books: Book[] = [
    {"title":"My Talented book","author":"ABC"},
    {"title":"My Third Book","author":"XYZ"},
    {"title":"First Book","author":"CDE"}
  ];
  
  // Get references to the input field and the results div
  const searchInput = document.getElementById('searchInput') as HTMLInputElement;
  const resultsDiv = document.getElementById('resultsDiv');
  
  // Event handler for the input field change event
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
  
    // Clear previous results
    if (resultsDiv) {
      resultsDiv.innerHTML = '';
    }
  
    // Search for books matching the entered term
    const matchingBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm) && book.title !== "First Book");
  
    // Display matching books
    if (resultsDiv) {
      matchingBooks.forEach(book => {
        const bookInfo = document.createElement('p');
        bookInfo.textContent = `${book.title} - ${book.author}`;
        resultsDiv.appendChild(bookInfo);
      });
    }
  });
  