import React from 'react';
import { auth } from '@/firebase/firebase';
import { signInAnonymously } from 'firebase/auth';
import { IoPersonSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

interface AnonymousLogProps {
  onSuccess: () => void; // Add onSuccess prop
}

const AnonymousLog: React.FC<AnonymousLogProps> = ({ onSuccess }) => {
  const router = useRouter();
  const db = getFirestore();

  const handleAnonymousLogin = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
      console.log('Anonymous login successful');

      // Store user data in Firestore
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        email: 'anonymous@example.com', // Placeholder email
        plan: 'basic', // Default plan
        createdAt: new Date(), // Timestamp
      });

      console.log('User data written to Firestore successfully');
      onSuccess(); // Call onSuccess to close the modal
      router.push('./account');
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error ${error}: ${error.message}`);
      }
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={handleAnonymousLogin}
        className='relative flex items-center bg-blue-900 hover:bg-blue-700 rounded text-white w-[300px] p-2'
      >
        <IoPersonSharp size={20} className='absolute left' />
        <span className='mx-auto'>Login as a Guest</span>
      </button>
    </div>
  );
}

export default AnonymousLog;