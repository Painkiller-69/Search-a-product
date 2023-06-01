interface Book {
  title: string;
  author: string;
}

const books: Book[] = [
  { title: "My Talented book", author: "ABC" },
  { title: "My Third Book", author: "XYZ" },
  { title: "First Book", author: "CDE" },
];

function searchBooks(): void {
  const searchInput: HTMLInputElement = document.getElementById(
    "searchInput"
  ) as HTMLInputElement;
  const searchResults: HTMLElement = document.getElementById(
    "searchResults"
  ) as HTMLElement;
  const searchTerm: string = searchInput.value;

  // Clear previous search results
  searchResults.innerHTML = "";

  // Display the corresponding divs for matching books
  books.forEach((book: Book) => {
    if (book.title.includes(searchTerm)) {
      const div: HTMLDivElement = document.createElement("div");
      div.textContent = `${book.title} - ${book.author}`;
      searchResults.appendChild(div);
    }
  });
}
