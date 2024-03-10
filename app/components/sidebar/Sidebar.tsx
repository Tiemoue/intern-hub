"use client";
import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowRight, MdFavoriteBorder, MdOutlineHome, MdOutlineWork, MdPersonOutline } from 'react-icons/md';
import { TbClockShare } from "react-icons/tb";
import Link from 'next/link';


const Sidebar = ({ props }: { props: string }) => {

    const [isOpen, setIsOpen] =  useState(() => {
        if (typeof window !== 'undefined') {
          const storedValue = localStorage.getItem('sidebarOpen');
          return storedValue ? JSON.parse(storedValue) : false;
        }
        return false;
      });
      
    const [selectedPage, setSelectedPage] = useState(props);

    useEffect(() => {
        // Update localStorage whenever isOpen changes
        localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
    }, [isOpen]);

    const toggleSidebar = () => setIsOpen(!isOpen);

    // Function to update selected page
    const handlePageSelect = (page: string) => {
        setSelectedPage(page);
    };

    return (

        <div className={`flex flex-col ${isOpen ? 'w-60' : 'w-20'} h-full bg-gray-800 transition-all duration-300 ease-in-out`}>

            <div className="flex items-center justify-center h-20">
                <span style={{ color: '#fa7d5d' }} className="text-2xl"> <MdOutlineWork /> </span>
                {isOpen && <span className="ml-2 text-md text-white">Intern Hub</span>}
            </div>

            <div className="h-1 bg-gray-700"></div>

            <ul className="flex flex-col items-center flex-1">
                {[
                    { name: 'Dashboard', icon: MdOutlineHome, value: 'dashboard' },
                    { name: 'Matches', icon: MdFavoriteBorder, value: 'matches' },
                    { name: 'Tracker', icon: TbClockShare, value: 'tracker' },
                    { name: 'Profile', icon: MdPersonOutline, value: 'profile' }, // Replaced PiUserCircle for demonstration
                ].map(({ name, icon: Icon, value }) => (
                    <Link href={`/${value}`} key={name}>
                        <li className={`w-full flex items-center justify-center p-4 mb-5 cursor-pointer ${selectedPage === name ? 'bg-slate-600' : ''}`} onClick={() => handlePageSelect(name)}>
                            <span style={{ color: '#fa7d5d' }} className="text-xl"> <Icon /> </span>
                            {isOpen && <span className="ml-2 text-sm text-white">{name}</span>}
                        </li>
                    </Link>
                ))}
            </ul>

            <div className="p-2 self-center mb-4">
                <button onClick={toggleSidebar} className="bg-gray-800 p-2 rounded-full">
                    <span style={{ color: '#fa7d5d' }} className="text-xl"><MdKeyboardDoubleArrowRight /></span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
