// components/BookCard.js
import React from 'react';

function BookCard({ book }) {
  // TODO: Implement add to bookshelf functionality

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author_name}</p>
      <button>Add to Bookshelf</button>
    </div>
  );
}

export default BookCard;
