'use client'
import { useEffect, useState } from 'react';
import { auth } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import SideNav from '@/app/components/sideNav';
import SearchBar from '@/app/components/SearchBar';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push('/login'); // Redirect to login if not authenticated
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <div>Loading...</div>; // Optional loading state

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto md:p-12">
        <SearchBar />
        {isAuthenticated ? children : null}
      </div>
    </div>
  );
}