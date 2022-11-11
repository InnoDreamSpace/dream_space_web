import { Fragment, memo } from 'react';
import { HeaderProps } from './Header';
import { Dialog, Transition } from '@headlessui/react';
import { HiXMark } from 'react-icons/hi2';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';

type MobileDialogProps = HeaderProps & {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const MobileDialog = memo(({ pages, open, setOpen }: MobileDialogProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 z-40 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
              <div className='flex px-4 py-5 justify-between'>
                <div className='flex'>
                  <Logo />
                </div>
                <button
                  type='button'
                  className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <HiXMark className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              <div className='space-y-6 border-t border-gray-200 py-6 px-4'>
                {pages?.map((page) => (
                  <div
                    key={page.name}
                    className='flex items-center text-gray-600 hover:text-gray-800'
                  >
                    {page.icon}
                    <Link key={page.name} to={page.href} className='-m-2 block p-2 font-medium'>
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className='space-y-6 border-t border-gray-200 py-6 px-4'>
                <div className='flow-root'>
                  <Link to={'login'} className='-m-2 block p-2 font-medium text-gray-900'>
                    Sign in
                  </Link>
                </div>
                <div className='flow-root'>
                  <Link to={'register'} className='-m-2 block p-2 font-medium text-gray-900'>
                    Create account
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
});

MobileDialog.displayName = 'HeaderMobileDialog';