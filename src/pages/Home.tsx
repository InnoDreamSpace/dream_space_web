import { BsArrowRightShort } from 'react-icons/bs';
import Carusel from '../components/Carusel/Carusel';
import { FaRegLightbulb } from 'react-icons/fa';
import { RiUserSmileLine } from 'react-icons/ri';
import { TbAugmentedReality } from 'react-icons/tb';

export const Home = () => {
  return (
    <div>
      <Carusel />
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-20 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              We design your space
            </h1>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
              Let us design your home to become that dream space you always imagined.
            </p>
            <div className='flex mt-6 justify-center'>
              <div className='w-16 h-1 rounded-full bg-brown-600 inline-flex'></div>
            </div>
          </div>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-brown-300 text-brown-700 mb-5 flex-shrink-0'>
                <FaRegLightbulb className='w-12 h-12' />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  What‘s the idea?
                </h2>
                <p className='leading-relaxed text-base'>
                  Everyone wants their spaces to display their identity. This is the main reason for
                  our existence.
                </p>
              </div>
            </div>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-brown-300 text-brown-700 mb-5 flex-shrink-0'>
                <RiUserSmileLine className='w-12 h-12' />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>For whom?</h2>
                <p className='leading-relaxed text-base'>
                  For all lovers of beautiful designer furniture and for design studios who want to
                  create! Even the smallest design studios have a space on our platform.
                </p>
              </div>
            </div>

            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-brown-300 text-brown-700 mb-5 flex-shrink-0'>
                <TbAugmentedReality className='w-12 h-12' />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  What‘s unusual?
                </h2>
                <p className='leading-relaxed text-base'>
                  Our platform give customers the ability to preview furniture in their spaces using
                  Augmented Reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-20 mx-auto'>
          <div className='text-center'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              More about designing your dream space with AR
            </h1>
            <div className='flex mt-6 justify-center'>
              <div className='w-16 h-1 rounded-full bg-brown-600 inline-flex'></div>
            </div>
          </div>
          <div className='container mx-auto flex py-8 items-center justify-center flex-col'>
            <video controls className='max-w-screen-lg w-full object-cover object-center rounded'>
              <source src='https://youtu.be/KZW5_jMQ1vQ' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-12 mx-auto'>
          <div className='text-center mb-4'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              DreamSpace Team
            </h1>
            <div className='flex mt-6 justify-center'>
              <div className='w-16 h-1 rounded-full bg-brown-600 inline-flex'></div>
            </div>
          </div>
          <div className='flex flex-wrap -mx-4 max-sm:flex-nowrap overflow-x-scroll'>
            <div className='p-4 lg:w-1/5 md:w-1/2 max-sm:min-w-full'>
              <div className='h-full flex flex-col items-center text-center'>
                <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200 mb-4 '>
                  <img
                    alt='team'
                    className='w-full object-cover object-center'
                    src='src/assets/images/team/Gabriel.jpeg'
                  />
                </div>
                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>Gabriel Chung</h2>
                  <h3 className='text-gray-500 mb-3'>CEO</h3>
                  <p className='mb-4'>Founder GT Merch</p>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/5 md:w-1/2 max-sm:min-w-full'>
              <div className='h-full flex flex-col items-center text-center'>
                <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200 mb-4 '>
                  <img
                    alt='team'
                    className='w-full object-cover object-center'
                    src='src/assets/images/team/Marco.jpeg'
                  />
                </div>
                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>Marko Pezer</h2>
                  <h3 className='text-gray-500 mb-3'>COO</h3>
                  <p className='mb-4'>UI/UX Designer</p>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/5 md:w-1/2 max-sm:min-w-full'>
              <div className='h-full flex flex-col items-center text-center'>
                <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200 mb-4 '>
                  <img
                    alt='team'
                    className='w-full object-cover object-center'
                    src='src/assets/images/team/Victoriya.jpeg'
                  />
                </div>
                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    Victoriya Gubanova
                  </h2>
                  <h3 className='text-gray-500 mb-3'>CTO</h3>
                  <p className='mb-4'>Ex-developer at Yandex</p>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/5 md:w-1/2 max-sm:min-w-full'>
              <div className='h-full flex flex-col items-center text-center'>
                <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200 mb-4 '>
                  <img
                    alt='team'
                    className='w-full object-cover object-center'
                    src='src/assets/images/team/Daniel.jpeg'
                  />
                </div>
                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>Daniel Atonge</h2>
                  <h3 className='text-gray-500 mb-3'>WEB DEVELOPER</h3>
                  <p className='mb-4'>Client-side engineer</p>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/5 md:w-1/2 max-sm:min-w-full'>
              <div className='h-full flex flex-col items-center text-center'>
                <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200 mb-4 '>
                  <img
                    alt='team'
                    className='w-full object-cover object-center'
                    src='src/assets/images/team/Andrey.jpeg'
                  />
                </div>

                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>Andrey Sobolev</h2>
                  <h3 className='text-gray-500 mb-3'>BACKEND DEVELOPER</h3>
                  <p className='mb-4'>Server-side engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-12 mx-auto'>
          <div className='lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto'>
            <h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900'>
              In order to contact us, you can join our community, and we will definitely answer your
              questions!
            </h1>
            <a
              target='_blank'
              href='https://t.me/+DHPa6OoyFJoxNTgy'
              rel='noreferrer'
              className='flex items-center flex-shrink-0 text-white bg-brown-700 hover:bg-brown-800 focus:bg-brown-600 text-white rounded-lg px-3 py-3 font-semibold text-md mt-10 sm:mt-0'
            >
              <span>CONTACT</span>
              <BsArrowRightShort className='h-8 w-8' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
