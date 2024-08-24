'use client'
import { useEffect, useState } from 'react';
import { Book } from '@/app/account/book'; // Adjust the import path as needed
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link'
import { CiStar } from "react-icons/ci";
import Image from 'next/image';

const Library: React.FC = () => {
  const [library, setLibrary] = useState<Book[]>([]);

  useEffect(() => {
    const fetchLibrary = async () => {
      const libraryIds = JSON.parse(localStorage.getItem('library') || '[]');
      
      if (libraryIds.length > 0) {
        try {
          const requests = libraryIds.map((id: string) =>
            axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
          );
          const responses: AxiosResponse<Book>[] = await Promise.all(requests);
          setLibrary(responses.map(response => response.data));
        } catch (error) {
          console.error('Error fetching library books:', error);
        }
      }
    };

    fetchLibrary();
  }, []);

  if (library.length === 0) {
    return <div>No books in your library</div>;
  }

  return (
    <div className="mx-60 p-6">
      <h1 className="text-3xl font-bold mb-4">Saved Books</h1>
      <div className="space-y-4">
        {library.map((book) => (
          <div key={book.id} className="border-b py-4 flex items-start">
            <div className="flex-shrink-0 w-32 h-32">
              <Image
                src={book.imageLink}
                alt={book.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex-1">
              <Link href={`/account/book/${book.id}`} className="block mb-2 text-xl font-bold text-blue-600 hover:underline">
                {book.title}
              </Link>
              <p className="text-gray-500 text-sm mb-1">{book.author}</p>
              <p className="text-gray-600 text-sm mb-2">{book.subTitle}</p>
              <p className="text-gray-500 flex items-center gap-2">
                <CiStar size={20} /> {book.averageRating}
              </p>
            </div>
          </div>
        ))}

        <div className='my-6'>
          <h1 className='text-3xl font-bold mb-4'>Finished</h1>
          <div className='bg-gray-200 w-[500px] h-[120px] p-10 text-center mx-auto'>
            <h1 className='text-xl font-semibold'>Done and Dusted</h1>
            <h2>When you finish a book, you can find it here later</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
