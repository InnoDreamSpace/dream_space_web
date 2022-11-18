import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <main className='flex w-full items-center justify-center flex-col mx-auto max-w-2xl lg:max-w-7xl'>
      <div className='w-full text-center text-gray-800 py-20 px-6'>
        <h1 className='text-5xl font-bold mt-0 mb-6'>DREAM SPACE</h1>
        <p className='text-xl font-thin text-start mb-8'>
          Furnitures have become an integral part of any home design. Everyone wants their spaces to
          display their identity. This is the main reason for our existence.
        </p>
        <p className='text-xl font-thin text-start mb-8'>
          Dream Space provides the cheapest, well-designed and most affordable furnitures from
          design studios all over Russia. Even the smallest design studios have a space on our
          platform.
        </p>
        <p className='text-xl font-thin text-start mb-8'>
          Our platform give customers the ability to preview furniture in their spaces using
          Augmented Reality.
        </p>
        <Link
          className='inline-block px-6 py-2.5 bg-brown-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-brown-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-brown-600 transition duration-150 ease-in-out'
          to={'/'}
          role='button'
        >
          Get started
        </Link>
      </div>
    </main>
  );
};
