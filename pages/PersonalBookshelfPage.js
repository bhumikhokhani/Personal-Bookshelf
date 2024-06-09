// pages/PersonalBookshelfPage.js
import React from 'react';
import BookCard from '../components/BookCard';

function PersonalBookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  // TODO: Load bookshelf from localStorage

  return (
    <div>
      {bookshelf.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default PersonalBookshelfPage;
