import { Popover } from '@headlessui/react';
import { MdOutlineFavorite } from 'react-icons/md';
import { HiMenu } from 'react-icons/hi';
import { Logo } from '../Logo';
import { HeaderProps } from './Header';
import { memo } from 'react';
import { Link } from 'react-router-dom';

type LayoutProps = HeaderProps & {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const Layout = memo(({ pages, setOpen, user, onLogout }: LayoutProps) => {
  return (
    <div className='bg-white max-sm:fixed w-full'>
      <header className='relative bg-white'>
        <nav aria-label='Top' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='border-b border-gray-200 max-sm:border-none'>
            <div className='flex h-16 items-center'>
              <button
                type='button'
                className='rounded-md bg-white p-2 text-gray-400 lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <HiMenu className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0 mb-8hidden max-md:hidden max-lg:hidden'>
                <Logo />
              </div>

              {/* Flyout menus */}
              <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
                <div className='flex h-full space-x-8'>
                  {pages?.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  {user === undefined ? (
                    <>
                      <Link
                        to={'login'}
                        className='text-sm font-medium text-gray-700 hover:text-gray-800'
                      >
                        Sign in
                      </Link>
                      <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                      <Link
                        to={'register'}
                        className='text-sm font-medium text-gray-700 hover:text-gray-800'
                      >
                        Create account
                      </Link>
                    </>
                  ) : (
                    <button
                      onClick={onLogout}
                      className='text-sm font-medium text-gray-700 hover:text-gray-800'
                    >
                      Logout
                    </button>
                  )}
                </div>

                {/* Favorite */}
                {user !== undefined && (
                  <div className='ml-4 flow-root lg:ml-6 max-sm:hidden'>
                    <Link to={'favorite'} className='group -m-2 flex items-center p-2'>
                      <MdOutlineFavorite
                        className='h-6 w-6 flex-shrink-0 text-red-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>favorite items</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
});

Layout.displayName = 'HeaderLayout';
