import React from 'react'
import { MdOutlineWork } from "react-icons/md";
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>About</a></li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                            <li><a>More</a></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl">Intern Hub<span style={{ color: '#fa7d5d' }}> <MdOutlineWork />  </span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a>About</a></li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                        <li><a>More</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/login" className="btn mr-2 border border-gray-400">Log in</Link>
                    <Link href="/signup" className="btn mr-2 bg-teal-500 hover:bg-teal-700">Sign up</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar