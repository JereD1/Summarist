'use client'
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import Link from 'next/link'
import { Book } from '@/app/account/book'; // Adjust the import path as needed
import { useParams } from 'next/navigation';
import { FiMic } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";
import { FaRegStar, FaRegBookmark } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

const BookDetails: React.FC = () => {
  const { id } = useParams(); // Retrieves the dynamic ID from the URL
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isInLibrary, setIsInLibrary] = useState<boolean>(false); // Track library status

  useEffect(() => {
    let isMounted = true; // Flag to track whether the component is mounted

    const fetchBook = async () => {
      if (!id) return;

      try {
        const response: AxiosResponse<Book> = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        );

        if (isMounted) {
          setBook(response.data);
          setIsInLibrary(isBookInLibrary(response.data.id)); // Check if book is in library
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
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

  const isBookInLibrary = (bookId: string) => {
    const library = JSON.parse(localStorage.getItem('library') || '[]');
    return library.includes(bookId);
  };

  const toggleLibrary = () => {
    if (!book) return;

    let library = JSON.parse(localStorage.getItem('library') || '[]');

    if (isInLibrary) {
      // Remove book from library
      library = library.filter((bookId: string) => bookId !== book.id);
    } else {
      // Add book to library
      library.push(book.id);
    }

    localStorage.setItem('library', JSON.stringify(library));
    setIsInLibrary(!isInLibrary);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!book) {
    return <div>No book found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row mx-20 mt-6 px-32">
      <div className="flex flex-col md:w-2/3">
        <div className='border-b p-2'>
          <h1 className="text-3xl font-bold w-[660px] mb-2">{book.title}</h1>
          <p className="font-semibold mb-2">{book.author}</p>
          <p className="text-gray-600">{book.subTitle}</p>
        </div>
        <div className='border-b'>
          <div className="flex items-center gap-2 my-4">
            <FaRegStar />
            <h2 className="text-lg font-semibold">{book.averageRating}</h2>
            <h2>{book.totalRating} ratings</h2>
          </div>
          <div className="flex items-center gap-12 my-4">
            <h2 className="font-semibold flex items-center gap-3">
              <FiMic /> {book.type}
            </h2>
            <h2 className="font-semibold flex items-center gap-2">
              <HiOutlineLightBulb />
              {book.keyIdeas} Key Ideas
            </h2>
          </div>
        </div>

        <div className="my-4 flex gap-5">
          <Link href={`/account/player/${book.id}`} key={book.id}>
            <button className="bg-blue-950 text-white flex justify-center items-center gap-2 w-40 h-12 rounded">
              <MdMenuBook size={20} /> Read
            </button>
          </Link>
          <Link href={`/account/player/${book.id}`} key={book.id}>
            <button className="bg-blue-950 text-white flex justify-center items-center gap-2 w-40 h-12 rounded">
              <FiMic /> Listen
            </button>
          </Link>
        </div>
        <div className="my-4">
          <button
            onClick={toggleLibrary}
            className="flex items-center gap-3 text-blue-600 font-semibold"
          >
            <FaRegBookmark />
            {isInLibrary ? 'Remove from My Library' : 'Add to My Library'}
          </button>
        </div>

        <div className="my-4">
          <h2 className="text-lg font-semibold">What's it about</h2>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(book.tags)
              ? book.tags.map((tag: string) => (
                  <button key={tag} className="bg-gray-200 px-4 py-2 my-3 border rounded">
                    {tag}
                  </button>
                ))
              : typeof book.tags === 'string'
              ? book.tags.split(',').map((tag: string) => (
                  <button key={tag} className="px-3 py-1 border rounded">
                    {tag.trim()}
                  </button>
                ))
              : <p>No tags available</p>}
          </div>
          <p className="my-2">{book.bookDescription}</p>
          <h2 className="text-lg font-semibold mb-4">About the author</h2>
          <p>{book.authorDescription}</p>
        </div>
      </div>
      <div className="flex-shrink-0 md:w-1/3 mt-6 md:mt-0">
        <img src={book.imageLink} alt={book.title} className="w-full h-auto max-w-xs mx-auto" />
      </div>
    </div>
  );
};

export default BookDetails;
