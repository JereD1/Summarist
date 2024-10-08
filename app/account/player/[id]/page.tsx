'use client';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Book } from '@/app/account/book'; // Adjust the import path as needed
import { useParams } from 'next/navigation';
import Skeleton from '@mui/material/Skeleton';

const BookDetails: React.FC = () => {
  const { id } = useParams(); // Retrieves the dynamic ID from the URL
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [audioUrl, setAudioUrl] = useState<string | null>(null); // State for audio URL

  useEffect(() => {
    let isMounted = true; // Flag to track whether the component is mounted

    const fetchBook = async () => {
      if (!id) return;

      try {
        const response: AxiosResponse<Book> = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        );

        if (isMounted) { // Only update state if the component is still mounted
          setBook(response.data);
          setAudioUrl(response.data.audioLink ?? null); // Handle optional audioUrl
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) { // Only update state if the component is still mounted
          if (axios.isAxiosError(error)) {
            setError(error.message);
          } else {
            setError('An error occurred');
          }
          setLoading(false);
        }
      }
    };

    fetchBook();

    return () => {
      isMounted = false; // Set flag to false when the component is unmounted
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col mx-6 lg:mx-20 mt-6 lg:px-32">
        <Skeleton variant="text" width="80%" height={40} />
        <Skeleton variant="rectangular" width="100%" height={200} className="mt-4" />
        <Skeleton variant="text" width="60%" height={30} className="mt-4" />
        <Skeleton variant="text" width="60%" height={30} className="mt-2" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!book) {
    return <div>No book found</div>;
  }

  // Helper function to split the summary into paragraphs
  const renderParagraphs = (text: string) => {
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim() !== "");
    return paragraphs.map((para, index) => (
      <p key={index} className="mb-4">{para}</p>
    ));
  };

  return (
    <div>
      <div className="flex flex-col mx-6 lg:mx-20 mt-6 lg:px-32">
        <div className="flex flex-col">
          <div className='border-b p-2'>
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          </div>
          <div className="mt-4">
            {renderParagraphs(book.summary)}
          </div>
        </div>
      </div>
      <div className='lg:w-[1540px] lg:h-[150px] bg-blue-950 mt-6 flex flex-col'>
        {audioUrl && (
          <div className="flex mt-4 lg:mt-10 lg:h-[140px]">  
            <img
              src={book.imageLink}
              alt={book.title}
              className="flex flex-col w-[70px] h-[80px] mx-4 py-2"
            />
            <div className='flex flex-col'>
              <h2 className='text-white font-bold mb-2'>{book.title}</h2>
              <h2 className='text-gray-50'>{book.author}</h2>
            </div>
            <audio controls className="flex items-center lg:justify-end m-auto w-[200px] lg:w-[600px]">
              <source src={audioUrl} type="audio/mpeg" />
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;