'use client'
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Book } from './book'
import Link from 'next/link'
import { CiStar } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/firebase'; 
import LoginModal from '@/app/components/loginModal';
import Skeleton from '@mui/material/Skeleton';


const RecommendedBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userPlan, setUserPlan] = useState<'basic' | 'premium'>('basic'); // Track premium status
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response: AxiosResponse<Book[]> = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended');
        setBooks(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError('An error occurred');
        }
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);


  const handleBookClick = (bookId: string, subscriptionRequired: boolean) => {
    const user = auth.currentUser;

    if (!user) {
      // User is not logged in, show the login modal and store the book ID
      setShowModal(true);
  
    } else {
      // User is logged in, check subscription plan
      if (subscriptionRequired && userPlan === 'basic') {
        router.push('../choose-plan'); // Redirect to choose plan
      } else {
        router.push(`/account/book/${bookId}`); // Go to book details
      }
    }
  };

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

  return (
    <div>
      <div className="flex flex-row overflow-x-auto space-x-4 mt-10">
        {books.map((book) => (
          <div key={book.id} className="flex-shrink-0 w-64">
            <div className='flex w-40 m-3 justify-end'>
              {book.subscriptionRequired && (
                <p className='text-white bg-blue-950 px-2 text-sm rounded-full'>Premium</p>
              )}
            </div>
            <img
              src={book.imageLink}
              alt={book.title}
              className="w-[172px] h-[172px] cursor-pointer"
              onClick={() => handleBookClick(book.id, book.subscriptionRequired)}
            />
            <div className="p-4">
              <h3 className="text-sm font-bold mb-1">{book.title}</h3>
              <p className="text-gray-500 text-sm mb-1">{book.author}</p>
              <p className="text-gray-600">{book.subTitle}</p>
              <p className="text-gray-500 flex items-center gap-2">
                <CiStar size={20} className='flex' /> {book.averageRating}
              </p>
            </div>
          </div>
        ))}
        {error && <div className="text-red-500">{error}</div>}
      </div>

      
        <LoginModal isVisible={showModal} onClose={() => setShowModal(false)}  />
    
    </div>
  );
}

export default RecommendedBooks;
