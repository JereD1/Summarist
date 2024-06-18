import React, { useState } from 'react';
import SignModal from './signModal'
import GuestLogin from './GuestLogin';
import GoogleLogin from './GoogleLogin';
import EmailAndPassword from './EmailAndPassword';
import { IoMdClose } from 'react-icons/io';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<Props> = ({ isVisible, onClose }) => {
  
  const [showModal, setShowModal] = useState(false);

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
      <div className='bg-white rounded-lg'>
        <div className='px-6 py-2'>
          <div className='flex flex-col'>
            <IoMdClose
              size={25}
              className='text-xl place-self-end hover:cursor-pointer'
              onClick={onClose} // Close the LoginModal when clicked on the close icon
            />
          </div>
          <div className='font-bold p-2 m-2 rounded flex justify-center'>
            <p>Log in to Summarist</p>
          </div>
          <div>
            <GuestLogin />
          </div>
          <div className='m-2 flex justify-center'>
            <p className='text-xs text-center'>---------------------------------- or ----------------------------------</p>
          </div>
          <div>
            <GoogleLogin />
          </div>
          <div className='m-2 flex justify-center'>
            <p className='text-xs text-center'>---------------------------------- or ----------------------------------</p>
          </div>
          <EmailAndPassword />
          <div className='flex justify-center m-4'>
            <button className='text-blue-400 text-xs'>Forgot your password?</button>
          </div>
        </div>
        <div className='bg-gray-200 flex justify-center'>
          <button onClick={() => setShowModal(true)}> Don't have an account?</button>
        <SignModal  isVisible={showModal} onClose={() => setShowModal(false)}/>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
