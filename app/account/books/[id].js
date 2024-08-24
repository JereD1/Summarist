'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const BookDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Wait for the id to be available

    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://api.example.com/books/${id}`); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>Author: {book.author}</h2>
      <p>{book.description}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default BookDetails;