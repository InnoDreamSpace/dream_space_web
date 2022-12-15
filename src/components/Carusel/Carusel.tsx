import React from 'react';
import { Link } from 'react-router-dom';

const Carusel = () => {
  return (
    <div
      id='carouselExampleCrossfade'
      className='carousel slide carousel-fade relative z-0'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4'>
        <button
          type='button'
          data-bs-target='#carouselExampleCrossfade'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCrossfade'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCrossfade'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
      </div>
      <div className='carousel-inner relative w-full overflow-hidden'>
        <div className='carousel-item brightness-50 active bg-center bg-cover float-left w-full h-[32rem] lg:h-[36rem] max-sm:h-[24rem] flex items-end bg-[url("https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80")]'></div>
        <div className='carousel-item brightness-50 bg-center bg-cover float-left w-full h-[32rem] lg:h-[36rem] max-sm:h-[24rem] flex items-end bg-[url("https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")]'></div>
        <div className='carousel-item brightness-50 bg-center bg-cover float-left w-full h-[32rem] lg:h-[36rem] max-sm:h-[24rem] flex items-end bg-[url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80")]'></div>
      </div>
      <div className='block absolute w-full text-center top-36 max-sm:top-10 lg:top-36  md:top-20 max-md:top-20'>
        <h1 className='w-full text-6xl text-white font-extrabold max-sm:text-3xl max-md:text-5xl mb-6 max-sm:mb-4'>
          Furniture for your space
        </h1>
        <p className='text-3xl text-white mb-6 font-light tracking-wide max-sm:text-xl max-md:text-2xl md:text-2xl px-48 max-sm:px-2 max-md:px-36'>
          Constructing a great space has never been easy.
          <br /> Many people do not have the money to hire professional designers. <br />
          But <span className='text-brown-700'>DreamSpace</span> is here as your best friend for
          interior design.
        </p>
        <Link
          to='/products'
          className='flex w-[180px] mx-auto items-center justify-center flex-shrink-0 text-white bg-brown-700 hover:bg-brown-800 focus:bg-brown-600 text-white rounded-lg px-3 py-3 font-semibold text-md mt-10 sm:mt-0'
        >
          <span>Find your furniture</span>
        </Link>
      </div>
    </div>
  );
};

export default Carusel;
