"use strict";
// Book class and simple library management operations
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) throw new Error('BookAlreadyIssued');
    this.isIssued = true;
  }

  returnBook() {
    if (!this.isIssued) throw new Error('BookNotIssued');
    this.isIssued = false;
  }

  details() {
    return `${this.title} by ${this.author} [ISBN:${this.isbn}] - ${this.isIssued ? 'Issued' : 'Available'}`;
  }
}

const library = [
  new Book('The Alchemist', 'Paulo Coelho', 'ISBN001'),
  new Book('Clean Code', 'Robert C. Martin', 'ISBN002'),
  new Book('You Don\'t Know JS', 'Kyle Simpson', 'ISBN003')
];

// Display available books
console.log('Available books:');
for (const b of library.filter(book => !book.isIssued)) console.log(' -', b.details());

// Issue book by ISBN
function issueByISBN(isbn) {
  const book = library.find(b => b.isbn === isbn);
  if (!book) {
    console.log('Book not found for ISBN:', isbn);
    return;
  }
  try {
    book.issueBook();
    console.log('Issued book:', book.details());
  } catch (err) {
    console.log('Issue failed:', err.message);
  }
}

// Example: issue ISBN002
issueByISBN('ISBN002');

// Show available after issuing
console.log('Available after issuing:');
for (const b of library.filter(book => !book.isIssued)) console.log(' -', b.details());

// Return a book
try { library.find(b => b.isbn === 'ISBN002').returnBook(); console.log('Book returned: ISBN002'); } catch (e) { console.log(e.message); }
