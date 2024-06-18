// Ensure you have the necessary imports for Next.js and Firebase
'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react'; // Added useEffect
import { initFirebase } from '../firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Fixed import path
import { useRouter } from 'next/navigation';


export default function page() {
  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
 

  const handleSignInWithGoogle = async () => { // Moved sign-in logic to a function
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      // Handle successful sign-in (e.g., redirect user)
      router.push('/account'); // Redirect to dashboard after sign-in
    } catch (error) {
      // Handle sign-in error
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <div>
    <div className=' mt-6 mx-[500px] h-full '>
      <div className=' '>
      <div className='flex items-center justify-between' >
      <Image
      src="/logo.png"
      width={200}
      height={300}
      alt="Picture of the author"
    />
    <div className=' flex gap-6 '>
      <button  onClick={handleSignInWithGoogle}>Contuine With Google</button>
      <button >About</button>
      <button >Contact</button>
      <button >Help</button>
      </div>
      </div>

      </div>

     



      
    

    </div>
    </div>
  );
}
