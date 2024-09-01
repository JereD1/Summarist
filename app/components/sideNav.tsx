'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoHomeOutline, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdLibraryBooks, MdOutlineLogout } from "react-icons/md";
import { HiLogin } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { getAuth, signOut } from 'firebase/auth';
import LoginModal from '@/app/components/loginModal';

const SideNav = () => {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsLoggedIn(!!user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);

    const handleLibrary = () => {
        router.push('/account/library'); 
    };

    const handleHomeRoute = () => {
        router.push('/account'); 
    };

    const handleSetting = () => {
        router.push('/account/settings'); 
    };

    const handleLogOut = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
            router.push('/account'); 
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full bg-gray-300">
                <div className="animate-pulse w-[190px] h-full">
                    <div className="bg-gray-400 h-full w-full rounded-md"></div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-gray-100 h-full flex flex-col w-[190px]'>
            <div className='flex flex-col items-center'>
                <div className='p-2'>
                    <Image
                        src="/logo.png"
                        width={200}
                        height={300}
                        alt="Logo"
                        className="w-[120px] md:w-[130px] ml-4"
                    />
                    <div className='flex flex-col justify-center items-center w-[190px] mt-10'>
                        <button onClick={handleHomeRoute} className='flex hover:bg-gray-200 p-4 w-full'>
                            <IoHomeOutline size={20} className='mr-4' />
                            <span>For You</span>
                        </button>
                        <button onClick={handleLibrary} className='flex hover:bg-gray-200 p-4 w-full'>
                            <MdLibraryBooks size={20} className='mr-4' />
                            <span>My Library</span>
                        </button>
                        <button className='flex hover:bg-gray-200 p-4 w-full'>
                            <FaPen size={20} className='mr-4' />
                            <span>Highlights</span>
                        </button>
                        <button className='flex hover:bg-gray-200 p-4 w-full'>
                            <IoSearch size={20} className='mr-4' />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center w-[190px] mt-auto'>
                <button onClick={handleSetting} className='flex hover:bg-gray-200 p-4 w-full'>
                    <IoSettingsOutline size={20} className='mr-4' />
                    <span>Settings</span>
                </button>
                <button className='flex hover:bg-gray-200 p-4 w-full'>
                    <IoMdHelpCircleOutline size={20} className='mr-4' />
                    <span>Help & Support</span>
                </button>
                {isLoggedIn ? (
                    <button onClick={handleLogOut} className='flex hover:bg-gray-200 p-4 w-full'>
                        <MdOutlineLogout size={20} className='mr-4' />
                        <span>Logout</span>
                    </button>
                ) : (
                    <button onClick={() => setShowModal(true)} className='flex hover:bg-gray-200 p-4 w-full'>
                        <HiLogin size={20} className='mr-4'/>
                        <span>Login</span>
                    </button>
                )}
            </div>
            <LoginModal isVisible={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default SideNav;