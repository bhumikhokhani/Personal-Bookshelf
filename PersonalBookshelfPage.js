// PersonalBookshelfPage.js
import React, { useState, useEffect } from 'react';

function PersonalBookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = localStorage.getItem('bookshelf');
    if (storedBookshelf) {
      setBookshelf(JSON.parse(storedBookshelf));
    }
  }, []);

  return (
    <div>
      {bookshelf.map(book => (
        <div key={book.key}>
          <h2>{book.title}</h2>
          <p>{book.author_name}</p>
        </div>
      ))}
    </div>
  );
}

export default PersonalBookshelfPage;
