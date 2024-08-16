import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-100 flex flex-col items-center'>
      {/* Footer Links Section */}
      <div className='py-12 px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl w-full'>
        <div>
          <h6 className='font-bold text-lg mb-4'>Actions</h6>
          <ul>
            <li className='py-2 text-sm'>Summarist Magazine</li>
            <li className='py-2 text-sm'>Cancel Subscription</li>
            <li className='py-2 text-sm'>Help</li>
            <li className='py-2 text-sm'>Contact Us</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold text-lg mb-4'>Useful Links</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Summarist Business</li>
            <li className='py-2 text-sm'>Gift Cards</li>
            <li className='py-2 text-sm'>Authors & Publishers</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold text-lg mb-4'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Partners</li>
            <li className='py-2 text-sm'>Code of Conduct</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold text-lg mb-4'>Other</h6>
          <ul>
            <li className='py-2 text-sm'>Sitemap</li>
            <li className='py-2 text-sm'>Legal Notice</li>
            <li className='py-2 text-sm'>Terms of Service</li>
            <li className='py-2 text-sm'>Privacy Policies</li>
          </ul>
        </div>
      </div>
      {/* Copyright Section */}
      <div className='flex items-center justify-center py-4'>
        <p className='text-center text-sm'>Copyright © 2023 Summarist.</p>
      </div>
    </div>
  );
};

export default Footer;