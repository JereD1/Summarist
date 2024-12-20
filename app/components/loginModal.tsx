import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AnonymmousLog from './anonymousLog';
import GoogleLogin from './GoogleLogin';
import EmailAndPassword from './EmailAndPassword';
import GoogleSignUp from './GoogleSignUp';
import EmailSignUp from './EmailSignUp';

const LoginModal: React.FC<{ isVisible: boolean; onClose: () => void; }> = ({ isVisible, onClose }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignUp = () => setShowSignUp(true);
  const openLogin = () => setShowSignUp(false);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end">
          <IoMdClose
            size={25}
            className="hover:cursor-pointer text-black"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4">{showSignUp ? "Sign up to Summarist" : "Log in to Summarist"}</h2>

          {showSignUp ? (
            <>
              <GoogleSignUp />
              <div className="m-4 flex flex-row justify-center items-center gap-4">
                <div className="w-[120px] border-t-2 border-gray-400" />
                <span>or</span>
                <div className="w-[120px] border-t-2 border-gray-400" />
              </div>
              <EmailSignUp />
              <p className="mt-4 text-sm text-center">
                Already have an account?{" "}
                <button onClick={openLogin} className="text-blue-500 hover:underline">
                  Login
                </button>
              </p>
            </>
          ) : (
            <>
              <AnonymmousLog onSuccess={onClose} />
              <div className="m-4 flex flex-row justify-center items-center gap-4">
                <div className="w-[120px] border-t-2 border-gray-400" />
                <span>or</span>
                <div className="w-[120px] border-t-2 border-gray-400" />
              </div>
              <GoogleLogin onSuccess={onClose} />
              <div className="m-4 flex flex-row justify-center items-center gap-4">
                <div className="w-[120px] border-t-2 border-gray-400" />
                <span>or</span>
                <div className="w-[120px] border-t-2 border-gray-400" />
              </div>
              <EmailAndPassword onSuccess={onClose} />
              <p className="mt-4 text-sm text-center">
                Don&apos;t have an account?{" "}
                <button onClick={openSignUp} className="text-blue-500 hover:underline">
                  Sign up
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;