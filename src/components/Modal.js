import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 overflow-auto">
      <div className="relative p-8 w-full max-w-6xl h-5/6 flex flex-col">
        <button
          className="absolute top-4 right-4 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          x
        </button>
        <div className='overflow-y-auto custom-scrollbar h-full mt-8'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
