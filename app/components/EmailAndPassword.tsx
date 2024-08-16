import React, { useState } from 'react';
import { auth } from '@/firebase/firebase'; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';

const EmailPasswordLogin: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Clear previous errors

    // Validate email and password
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true); // Set loading state
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('./account'); // Redirect after successful login
    } catch (error) {
      if (error instanceof Error) {
        setError(`Wrong Password or Email`); // Set error message for display
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <form onSubmit={handleLogin} className='flex flex-col'>
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
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default EmailPasswordLogin;