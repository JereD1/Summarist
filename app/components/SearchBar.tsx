'use client'
import React, { useState, FormEvent } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default behavior
    console.log('Searching for:', query);
    setQuery(''); // Clear the input after search
  };

  return (
    <div className='flex justify-end items-center  w-full p-6 border-b border-gray-400 '>
    <form onSubmit={handleSearch} className='flex items-center rounded '>
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
    </div>
  );
};

export default SearchBar;