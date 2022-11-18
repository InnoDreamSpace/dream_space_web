export const About = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-8 max-sm:py-20 px-4 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            DREAM SPACE
          </h1>{' '}
          <h2 className='text-xl font-thin tracking-tight text-brown-900 sm:text-2xl'>
            YOUR BEST FRIEND FOR INTERIOR DESIGN
          </h2>
          <p className='mt-4 text-gray-500'>
            Furnitures have become an integral part of any home design.
          </p>
          <p className='mt-4 text-gray-500'>
            Dream Space provides the cheapest, well-designed and most affordable furnitures from
            design studios all over Russia.
          </p>
          <dl className='mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 max-sm:grid-cols-1 sm:gap-y-12 lg:gap-x-8'>
            <div className='border-t border-gray-200 pt-2 col-span-2 max-sm:col-span-1'>
              <dt className='font-medium text-gray-900'>Stay in touch</dt>
              <dd className='mt-2 text-sm text-gray-500'>
                In order to contact us, you can join our community, and we will definitely answer
                your questions:
                <a
                  target='_blank'
                  href='https://t.me/+DHPa6OoyFJoxNTgy'
                  className='ml-2 font-bold text-brown-600  font-bold text-mb'
                  rel='noreferrer'
                >
                  Join!
                </a>
              </dd>
            </div>
            <div className='border-t border-gray-200 pt-2'>
              <dt className='font-medium text-gray-900'>Whats the idea?</dt>
              <dd className='mt-2 text-sm text-gray-500'>
                Everyone wants their spaces to display their identity. This is the main reason for
                our existence.{' '}
              </dd>
            </div>

            <div className='border-t border-gray-200 pt-2'>
              <dt className='font-medium text-gray-900'>For whom?</dt>
              <dd className='mt-2 text-sm text-gray-500'>
                For all lovers of beautiful designer furniture and for design studios who want to
                create! Even the smallest design studios have a space on our platform.
              </dd>
            </div>

            <div className='border-t border-gray-200 pt-4 col-span-2 max-sm:col-span-1'>
              <dt className='font-medium text-gray-900'>What&lsquo;s unusual?</dt>
              <dd className='mt-2 text-sm text-gray-500'>
                Our platform give customers the ability to preview furniture in their spaces using
                Augmented Reality.
              </dd>
            </div>
          </dl>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
          <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200'>
            <img
              src='https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
              alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
              className='h-full w-full object-cover object-center opacity-75'
            />
          </div>
          <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200'>
            <img
              src='https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
              alt='Top down view of walnut card tray with embedded magnets and card groove.'
              className='h-full w-full object-cover object-center opacity-75'
            />
          </div>
          <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200'>
            <img
              src='https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              alt='Side of walnut card tray with card groove and recessed card area.'
              className='h-full w-full object-cover object-center opacity-75'
            />
          </div>
          <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200'>
            <img
              src='https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
              alt='Walnut card tray filled with cards and card angled in dedicated groove.'
              className='h-full w-full object-cover object-center opacity-75'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
