'use client'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Book } from '@/app/account/book';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      if (!id) return; // Ensure ID is present
      try {
        const response: AxiosResponse<Book> = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooks/${id}`);
        setBook(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError('An error occurred');
        }
        console.error('Fetch error:', error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="text-gray-500">{book.author}</p>
      <p className="text-gray-600">{book.subTitle}</p>
      <img src={book.imageLink} alt={book.title} className="w-full max-w-md mx-auto my-4" />
      <p>{book.summary}</p>
      {book.subscriptionRequired && <p className="text-red-500">Subscription required</p>}
    </div>
  );
};

export default BookDetails;