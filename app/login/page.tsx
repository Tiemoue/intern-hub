import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Link from 'next/link';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const page = () => {
    return (
        <div>
            <header><Navbar /></header>
            <main>
                <div className="flex h-screen w-screen items-center justify-center mb-4">
                    <div className='z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-white'>
                        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                            <h3 className="text-xl font-semibold">Welcome Back</h3>
                            <p className="text-sm text-gray-500">
                                Streamline your job search with one-click applications and real-time status tracking.
                            </p>
                        </div>
                        <div>
                            <div className="card-body w-full flex flex-col items-center gap-4">
                                <div className="w-full">
                                    <label
                                        htmlFor="email"
                                        className="block text-xs text-gray-600 uppercase"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="user@gmail.com"
                                        autoComplete="email"
                                        required
                                        className="mt-1 bg-gray-50 block w-full appearance-none rounded-md border border-gray-400 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        htmlFor="password"
                                        className="block text-xs text-gray-600 uppercase"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="mt-1 bg-gray-50 block w-full appearance-none rounded-md border border-gray-400 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm text-black"
                                    />
                                </div>

                                <div className="flex w-full justify-between items-center">
                                    <a href="#" className="text-blue-600 text-sm hover:underline">Forgot your password?</a>
                                    <button className="btn  bg-teal-600 hover:bg-teal-700 btn-md border border-gray-500  text-gray-50">Sign In</button>
                                </div>

                                <div className="text-sm">
                                    Don't have an account?
                                    <Link href='/signup' className='text-blue-600 hover:underline'> Register</Link>
                                </div>

                                <div className="divider">OR</div>

                                <div className="flex items-center justify-center space-x-4 mt-2">
                                    <button className="btn btn-md btn-outline border border-gray-500 flex items-center gap-2 w-full text-black">
                                        <FaGoogle />
                                    </button>
                                    <button className="btn btn-md btn-outline border border-gray-500 flex items-center gap-2 w-full text-black">
                                        <FaGithub />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default page