import React from 'react';


const Footer = () => {
  return (
    <div className=''>
    <div className='mx-auto py-16 px-4 grid lg:grid-cols-3 bg-gray-100'>
      <div className='lg:col-span-4 flex justify-center  gap-20  '>
    <div>
        <h6 className='font-bold'>Actions</h6>
        <ul>
            <li className='py-2 text-sm'>Summarist Magazine</li>
            <li className='py-2 text-sm'>Cancel Subscription</li>
            <li className='py-2 text-sm'>Help</li>
            <li className='py-2 text-sm'>Contact Us</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold'>Useful Links</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Summarist Bussiness</li>
            <li className='py-2 text-sm'>Gidt Cards</li>
            <li className='py-2 text-sm'>Authors & Puublishers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Partners</li>
            <li className='py-2 text-sm'>Code of Conduct</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold '>Other</h6>
        <ul>
            <li className='py-2 text-sm'>Sitemap</li>
            <li className='py-2 text-sm'>Legal Notice</li>
            <li className='py-2 text-sm'>Terms of service</li>
            <li className='py-2 text-sm'>Privacy Policies</li>
        </ul>
    </div>
   
      </div>
      
    </div>
    <div className='bg-gray-100'>
      <p className='flex flex-col items-center justify-center'>Copyright © 2023 Summarist.</p>
      </div>
    </div>
  );
};

export default Footer;