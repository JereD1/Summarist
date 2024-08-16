import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface SignUpModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center' 
      onClick={onClose}
    >
      <div className='bg-white rounded-lg' onClick={(e) => e.stopPropagation()}>
        <div className='px-6 py-2'>
          <div className='flex flex-col'>
            <IoMdClose
              size={25}
              className='text-xl place-self-end hover:cursor-pointer'
              onClick={onClose}
            />
          </div>
          <div className='font-bold p-2 m-2 rounded flex justify-center'>
            <p>Create an Account</p>
          </div>
          <div>
            {/* Add sign-up form elements here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;