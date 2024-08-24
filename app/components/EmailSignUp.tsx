import React, { useState } from 'react';
import { auth } from '@/firebase/firebase'; 
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { useRouter } from 'next/navigation';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const EmailSignUp: React.FC = () => {
  const router = useRouter();
  const db = getFirestore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const validateEmail = (email: string) => {
    return email.endsWith('@gmail.com');
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Clear previous errors

    // Validate email
    if (!validateEmail(email)) {
      setError('Please use a Gmail address (e.g., user@gmail.com).');
      return;
    }

    setLoading(true); // Set loading state

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        email: user.email,
        plan: 'basic', // Default plan
        createdAt: new Date(), // Timestamp
      });

      router.push('./account'); // Redirect after successful signup
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Set error message for display
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <form onSubmit={handleSignUp} className='flex flex-col'>
        <input
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-2 p-2 border rounded w-[300px]'
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mb-2 p-2 border rounded'
          required
        />
        {error && <p className='text-red-500 mb-2'>{error}</p>}
        <button
          type='submit'
          className={`bg-green-600 hover:bg-green-800 rounded text-white p-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
    </div>
  );
};

export default EmailSignUp;