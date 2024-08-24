'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://api.example.com/books'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ display: 'flex', overflowX: 'scroll' }}>
      {books.map(book => (
        <div key={book.id} style={{ margin: '0 10px' }}>
          <Link href={`/books/${book.id}`}>
            <img src={book.coverImage} alt={book.title} style={{ width: '150px', height: '200px' }} />
            <h3>{book.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;