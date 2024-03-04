import React from 'react'
import { MdOutlineWork } from "react-icons/md";
import Link from 'next/link';

const SignUpNavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl">Intern Hub<span style={{ color: '#fa7d5d' }}> <MdOutlineWork />  </span></Link>
                </div>
                <div className="flex-none">
                    <Link href="/signup" className="btn mr-2 bg-teal-500 hover:bg-teal-700">Sign up</Link>
                </div>
            </div></>
    )
}

export default SignUpNavBar