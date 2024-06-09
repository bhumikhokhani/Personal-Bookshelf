// BookSearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookSearchPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setBooks(response.data.docs);
        });
    }
  }, [query]);

  const addToBookshelf = (book) => {
    let bookshelf = localStorage.getItem('bookshelf');
    bookshelf = bookshelf ? JSON.parse(bookshelf) : [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };

  return (
    <div>
      <input type="text" onChange={e => setQuery(e.target.value)} />
      {books.map(book => (
        <div key={book.key}>
          <h2>{book.title}</h2>
          <p>{book.author_name}</p>
          <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
        </div>
      ))}
      <button onClick={() => window.location.href='/bookshelf'}>Go to Bookshelf</button>
    </div>
  );
}

export default BookSearchPage;
