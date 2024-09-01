'use client';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Book } from './book';
import Link from 'next/link';
import { getAuth } from 'firebase/auth';
import LoginModal from '@/app/components/loginModal';
import { useRouter } from 'next/navigation';

const BookDetails: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [hasPremiumPlan, setHasPremiumPlan] = useState<boolean>(false); // Track premium status
  const router = useRouter();
  const auth = getAuth();

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

  const handleBookClick = () => {
    const user = auth.currentUser;

    if (!user) {
      // User is not logged in, show the login modal
      setShowModal(true);
    } else if (!hasPremiumPlan) {
      // User is logged in but does not have a premium plan
      router.push('/pay'); // Redirect to payment page
    } else {
      // User is logged in and has a premium plan, navigate to the book details
      router.push(`/account/book/${book?.id}`);
    }
  };

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
    <>
      <div className='bg-yellow-100 w-[650px] h-[200px] flex flex-col' >
        <div className='flex' onClick={handleBookClick}>
          <div className='m-2 p-5 w-[250px] h-[160px] border-r'>
            <h1 className='text-sm font-medium'>{book.subTitle || 'No Subtitle available'}</h1>
          </div>
          <div className='flex m-2 p-5'>
            <div>
              <img src={book.imageLink} alt='Book Image' className='w-[150px]' />
            </div>
            <div className='p-2'>
              <h2 className='font-bold'>{book.title || 'No Title'}</h2>
              <h3 className='text-sm font-medium'>{book.author || 'Unknown Author'}</h3>
            </div>
          </div>
        </div>
      </div>
      <LoginModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default BookDetails;