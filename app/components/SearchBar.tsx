'use client'
import React, { useState, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]); // State to store search results
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading
  const [error, setError] = useState<string | null>(null); // State to handle errors

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default behavior

    if (query.trim() === '') {
      return; // Do nothing if the query is empty
    }

    setLoading(true); // Set loading state to true
    setError(null); // Reset error state

    try {
      const response: AxiosResponse<any[]> = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${query}`
      );
      setResults(response.data); // Update results with the API response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message); // Set error message if there's an Axios error
      } else {
        setError('An error occurred'); // Set a generic error message
      }
    } finally {
      setLoading(false); // Reset loading state
    }

    setQuery(''); // Clear the input after search
  };

  return (
    <div className='flex flex-col items-center w-full p-6 border-b border-gray-400'>
      <form onSubmit={handleSearch} className='flex items-center rounded'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search...'
          className='p-2 w-[250px] rounded border'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600'>
          Search
        </button>
      </form>
      {loading && <div className='mt-4'>Loading...</div>}
      {error && <div className='mt-4 text-red-500'>{error}</div>}
      {results.length > 0 && (
        <div className='mt-4 w-full'>
          <h2 className='text-xl font-bold mb-2'>Search Results:</h2>
          <ul>
            {results.map((result: any) => (
              <li key={result.id} className='border-b py-2'>
                <a href={`/account/book/${result.id}`} className='text-blue-600 hover:underline'>
                  {result.title} by {result.author}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
