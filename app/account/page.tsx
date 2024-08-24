'use client'
import React from 'react';
import SelectedBook from './selectedBook';
import RecommendedBook from './recommendedBooks';
import SuggestedBooks from './suggestedBooks';
import { BrowserRouter as Router, Link, useHref } from 'react-router-dom';

const AccountPage = () => {
  return (
    <Router>
    <div className='mx-60 p-4'>
      <div className='mb-4'>
       <h1 className='font-semibold text-xl'> Selected just for you</h1>
      </div>
      <SelectedBook />
      <div className='mt-4'>
        <h1 className='font-semibold text-xl mb-3'>Recommended For You</h1>
        <h3>We think you'll like these</h3>
        < RecommendedBook />
      </div>
      <div className='mt-4'>
        <h1 className='font-semibold text-xl mt-4 mb-3'>Suggested Books</h1>
        <h3>Browse those books</h3>
        <SuggestedBooks /> 
      </div>
    </div>
    </Router>
  );
}

export default AccountPage;

