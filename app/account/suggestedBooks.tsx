'use client'
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Book } from './book'
import { Link } from 'react-router-dom'
import { CiStar } from "react-icons/ci";

const SuggestedBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response: AxiosResponse<Book[]> = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested');
        setBooks(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError('An error occurred');
        }
        console.error('Fetch error:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-row overflow-x-auto space-x-4 mt-10">
      {books.map((book) => (
        <Link to={`/account/books/${book.id}`} key={book.id} >
        <div key={book.id} className="flex-shrink-0 w-64">
            <div className='flex w-40 m-3 justify-end'>
            {book.subscriptionRequired && (
                <p className='text-white bg-blue-950 px-2 text-sm rounded-full'>Premuim</p>
            )}
            </div>
          <img
            src={book.imageLink}
            alt={book.title}
            className="w-[170px] h-[150px]"
          />
          <div className="p-4">
            <h3 className="text-sm font-bold mb-1">{book.title}</h3>
            <p className="text-gray-500 text-sm mb-1">{book.author}</p>
            <p className="text-gray-600">{book.subTitle}</p>
            <p className="text-gray-500 flex items-center gap-2">
            <CiStar size={20} className='flex'/> {book.averageRating}</p>
          </div>
        </div>
        </Link>
      ))}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}

export default SuggestedBooks;