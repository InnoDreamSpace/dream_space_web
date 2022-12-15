import React from 'react';
import { Logo } from '../Logo';

const Footer = () => {
  return (
    <footer className='text-gray-600 body-font b'>
      <div className='px-5 py-8 w-full flex items-center justify-center sm:flex-row flex-col'>
        <Logo />
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
