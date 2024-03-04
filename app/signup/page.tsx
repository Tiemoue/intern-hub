import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <header><Navbar /></header>
            <main>
                <div className="flex h-screen w-screen items-center justify-center mb-4">
                    <div className='z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-white'>
                        <div className="flex flex-col items-center justify-center space-y-3 border border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                            <h3 className="text-xl font-semibold">Create Your Account</h3>
                            <p className="text-sm text-gray-500">
                                Join us and simplify your job search with easy-to-create profiles and real-time tracking.
                            </p>
                        </div>
                        <div>
                            <div className="card-body w-full flex flex-col items-center gap-4">

                                <div className="w-full">
                                    <label
                                        htmlFor="firstName"
                                        className="block text-xs text-gray-600 uppercase"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        className="mt-1 bg-gray-50 block w-full appearance-none rounded-md border border-gray-400 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        htmlFor="lastName"
                                        className="block text-xs text-gray-600 uppercase"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        className="mt-1 bg-gray-50 block w-full appearance-none rounded-md border border-gray-400 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                    />
                                </div>

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
                                        className="mt-1 bg-gray-50 block w-full appearance-none rounded-md border border-gray-400 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                    />
                                </div>

                                <div className="px-4 py-2">
                                    <p className="text-xs text-gray-600">
                                        By signing up you agree to our
                                        <Link href="#"
                                            className="text-blue-600 hover:underline"> Terms and Conditions&nbsp;
                                        </Link>
                                        and
                                        <Link href="#"
                                            className="text-blue-600 hover:underline"> Privacy Policy
                                        </Link>.
                                    </p>
                                </div>

                                <Link href='/location' className="btn btn-md  bg-teal-600 hover:bg-teal-700 w-full mt-4  text-gray-50">Register</Link>

                                <div className="text-sm m-2">
                                    Already have an account?
                                    <Link href='/login' className='text-blue-600 hover:underline'> Sign In</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default page;
