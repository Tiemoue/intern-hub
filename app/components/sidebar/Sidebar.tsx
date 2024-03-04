'use client';
import React, { useState } from 'react';
import { MdKeyboardDoubleArrowRight, MdFavoriteBorder, MdOutlineHome, MdOutlineWork} from 'react-icons/md';

import { TbClockShare } from "react-icons/tb";
import { PiUserCircle } from "react-icons/pi";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className={`flex flex-col ${isOpen ? 'w-60' : 'w-20'} h-full bg-gray-800 transition-all duration-300 ease-in-out`}>

            <div className="flex items-center justify-center h-20">
                <span style={{ color: '#fa7d5d' }} className="text-2xl"> <MdOutlineWork /> </span>
                {isOpen && <span className="ml-2 text-md text-white">Intern Hub</span>} </div>

            <div className="h-1 bg-gray-700"></div>
            
            <ul className="flex flex-col items-center flex-1">
                <li className="w-full flex items-center justify-center py-5 mb-5">
                    <span style={{ color: '#fa7d5d' }} className="text-xl"> <MdOutlineHome /> </span>
                    {isOpen && <span className="ml-2 text-sm text-white">Dashboard</span>}
                </li>
                <li className="w-full flex items-center justify-center py-5 mb-5">
                    <span style={{ color: '#fa7d5d' }} className="text-xl"> <MdFavoriteBorder /></span>
                    {isOpen && <span className="ml-2 text-sm text-white">Matches</span>}
                </li>
                <li className="w-full flex items-center justify-center py-5 mb-5">
                    <span style={{ color: '#fa7d5d' }} className="text-xl"> <TbClockShare /> </span>
                    {isOpen && <span className="ml-2 text-sm text-white">Tracker</span>}
                </li>
                <li className="w-full flex items-center justify-center py-5 mb-5">
                    <span style={{ color: '#fa7d5d' }} className="text-xl"> <PiUserCircle /> </span>
                    {isOpen && <span className="ml-2 text-sm text-white">Profile</span>}
                </li>
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
