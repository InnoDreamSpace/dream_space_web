import React, { ReactNode } from 'react';

type ModalProps = {
  title: string;
  body: ReactNode;
  modalId: string;

  onCancle?: () => void;
  cancleButtonText?: string;

  onOk?: () => void;
  okButtonText?: string;
};

const Modal = ({
  title,
  body,
  onCancle,
  onOk,
  modalId,
  cancleButtonText,
  okButtonText,
}: ModalProps) => {
  return (
    <div
      className='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-gray-200/50'
      id={modalId}
      aria-labelledby={modalId}
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      aria-hidden='true'
      aria-modal='true'
      role='dialog'
    >
      <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none'>
        <div className='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'>
          <div className='modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md'>
            <h5 className='text-xl font-medium leading-normal text-gray-800'>{title}</h5>
            <button
              type='button'
              className='btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body relative p-4'>{body}</div>
          <div className='modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md'>
            <button
              type='button'
              className='flex w-[80px] items-center box-border tracking-wide font-semibold justify-center flex-shrink-0 text-brown-700  hover:text-brown-900 active:text-brown-700 rounded-lg px-3 py-2 text-sm'
              data-bs-dismiss='modal'
              onClick={onCancle}
            >
              {cancleButtonText ? cancleButtonText : 'Cancle'}
            </button>
            <button
              type='button'
              className='flex w-[80px] items-center tracking-wide font-semibold justify-center flex-shrink-0 text-white bg-brown-700 hover:bg-brown-800 focus:bg-brown-600 rounded-lg px-3 py-2 text-sm'
              data-bs-dismiss='modal'
              onClick={onOk}
            >
              {okButtonText ? okButtonText : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
