'use client'
import React from 'react';
import SelectedBook from './selectedBook';
import RecommendedBook from './recommendedBooks';
import SuggestedBooks from './suggestedBooks';

const AccountPage = () => {
  return (
  
      <div className='mx-60 p-4'>
        <div className='mb-4'>
          <h1 className='font-semibold text-xl'>Selected just for you</h1>
        </div>
        <SelectedBook />
        <div className='mt-4'>
          <h1 className='font-semibold text-xl mb-3'>Recommended For You</h1>
          <h3>We think you&#39;ll like these</h3> {/* Escaped the single quote */}
          <RecommendedBook />
        </div>
        <div className='mt-4'>
          <h1 className='font-semibold text-xl mt-4 mb-3'>Suggested Books</h1>
          <h3>Browse those books</h3>
          <SuggestedBooks /> 
        </div>
      </div>
 
  );
}

export default AccountPage;
