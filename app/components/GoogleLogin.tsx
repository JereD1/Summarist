import React from 'react';
import { auth } from '@/firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

interface GoogleLoginProps {
  onSuccess: () => void; // Add onSuccess prop
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({ onSuccess }) => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const db = getFirestore();

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // Store user data in Firestore
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName,
        plan: 'basic', // Default plan
        createdAt: new Date(), // Timestamp
      });

      onSuccess(); // Call onSuccess to close the modal
      router.push('./account'); // Redirect after successful login
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error ${error}: ${error.message}`);
      }
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={handleGoogleLogin}
        className='relative flex items-center bg-blue-500 hover:bg-blue-700 rounded text-white w-[300px] p-2'
      >
        <FcGoogle size={25} className='absolute left bg-white' />
        <span className='mx-auto'>Login with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;