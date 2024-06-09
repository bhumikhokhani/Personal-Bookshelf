// pages/BookSearchPage.js
import React, { useState } from 'react';
import BookCard from '../components/BookCard';

// Mock data set
const books = [
  { key: '1', title: 'Moby Dick', author_name: 'Herman Melville' },
  { key: '2', title: 'The Great Gatsby', author_name: 'F. Scott Fitzgerald' },
  // Add more books here...
];

function BookSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Update search results when search query changes
  React.useEffect(() => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      {searchResults.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default BookSearchPage;
