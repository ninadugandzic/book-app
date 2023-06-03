import React from 'react';

const books = [
  { id: 1, title: 'The Book Thief', author: 'Markus Zusak' },
  { id: 2, title: 'The Name Of The Rose', author: 'Umberto Eco' },
  { id: 3, title: 'Dracula', author: 'Bram Stoker' },
];

function BookList() {
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
