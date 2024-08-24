'use client';
import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const Setting = () => {
  const router = useRouter();
  const db = getFirestore();
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(true);

  const handleUpgrade = () => {
    router.push('../choose-plan');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setEmail(user.email || '');

        // Fetch user's plan from Firestore
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          setPlan(userDoc.data().plan || 'Basic'); // Default to 'Basic' if no plan is found
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db]);

  if (loading) return <div>Loading...</div>; // Optional loading state

  return (
    <div className='flex flex-col justify-center'>
      <div className='border-b mb-2 p-4'>
        <h1 className='font-bold text-4xl'>Setting</h1>
      </div>
      <div className='border-b mb-4 p-2'>
        <h3 className='font-semibold'>Your Subscription</h3>
        <p>{plan}</p>
        <button onClick={handleUpgrade} className='bg-green-500 mt-2 py-2 px-4 rounded'>
          Upgrade to premium
        </button>
      </div>
      <div>
        <h3 className='font-semibold text-lg p-2'>Email</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Setting;