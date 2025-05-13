/* Build a dynamic dashboard that displays the New York Times Hardcover Fiction bestsellers, updating every 10 seconds. 
The app should fetch data from an external API
Fetch data from API (NYT Books API) - https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YYRTmuGHrdxW9AaXsNhXhNhApOa05QAG
Fetch data using fetch() and async/await
Handle failures gracefully using try/catch
Data Processing
select only books that have been on the list for more than 3 weeks
sort the books by rank in ascending order
  3. Create a base class BookItem with common properties and methods
Create a base class BookItem with common properties and methods
Create a subclass LongTermBook that extends BookItem and overrides methods as needed
  4.  Use setInterval() to fetch and re-render book data every 10 seconds. 
        Use setTimeout() or clearInterval() if additional control is needed (e.g. auto-stop)
  5.  Rendering
Use an HTML <template> element to define the layout of each book
Use getElementById and cloneNode() to inject data into the DOM
Highlight books that have been on the list for more than 10 weeks using CSS  */
import { BookItem } from './bookItem.js';
import { LongTermBook } from './longTermBook.js';
import { renderBook } from './render.js';

fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YYRTmuGHrdxW9AaXsNhXhNhApOa05QAG')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  }
  .then(data => {
    const books = data.results.books.map(book => {
      const bookItem = new BookItem(book.title, book.author, book.rank, book.weeks_on_list);
      if (book.weeks_on_list > 10) {
        return new LongTermBook(bookItem.title, bookItem.author, bookItem.rank, bookItem.weeksOnList);
      }
      return bookItem;
    });

    // Filter books that have been on the list for more than 3 weeks
    const filteredBooks = books.filter(book => book.weeksOnList > 3);

    // Sort books by rank in ascending order
    filteredBooks.sort((a, b) => a.rank - b.rank);

    // Render the books to the DOM
    const container = document.getElementById('book-list');
    container.innerHTML = ''; // Clear previous content
    filteredBooks.forEach(book => renderBook(container, book));
  })

    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    setInterval(() => {
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YYRTmuGHrdxW9AaXsNhXhNhApOa05QAG')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const books = data.results.books.map(book => {
                    const bookItem = new BookItem(book.title, book.author, book.rank, book.weeks_on_list);
                    if (book.weeks_on_list > 10) {
                        return new LongTermBook(bookItem.title, bookItem.author, bookItem.rank, bookItem.weeksOnList);
                    }
                    return bookItem;
                });

                // Filter books that have been on the list for more than 3 weeks
                const filteredBooks = books.filter(book => book.weeksOnList > 3);

                // Sort books by rank in ascending order
                filteredBooks.sort((a, b) => a.rank - b.rank);

                // Render the books to the DOM
                const container = document.getElementById('book-list');
                container.innerHTML = ''; // Clear previous content
                filteredBooks.forEach(book => renderBook(container, book));
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });