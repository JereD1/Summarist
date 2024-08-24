'use client';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Book } from './book'


const BookDetails: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response: AxiosResponse<Book[]> = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected');
        setBook(response.data[0]);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>No book data available.</div>;
  }

  return (
    <div className='bg-yellow-100 w-[650px] h-[200px] flex flex-col '>
      <div className='flex'>
      <div className='m-2 p-5 w-[250px] h-[160px] border-r '>
      <h1 className='text-sm font-medium'>{book.subTitle || 'No Subtitle available'}</h1>
      </div>
      <div className='flex m-2 p-5 '>
        <div className=''>
      <img src={book.imageLink} alt='Book Image' className='w-[150px]'/>
      </div>
      <div className='p-2'>
      <h2 className='font-bold'>{book.title || 'No Title'}</h2>
      <h3 className='text-sm font-medium'>{book.author || 'Unknown Author'}</h3>  
      </div>  
      </div>  
      </div>
    </div>
  );
};

export default BookDetails;