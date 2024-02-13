import React from 'react'
import Navbar from '../components/navbar/Navbar'

const page = () => {
    return (
        <div>
            <header><Navbar /></header>
            <main>
                <div className="h-screen flex items-center justify-center">
                    <div className="card lg:card-side  bg-white shadow-xl mb-10 w-6/12 h-4/6 p-5">
                        <div className='flex flex-col items-start justify-center w-full h-full'>
                        <div>
                            <h2 className="text-5xl font-bold m-5">Welcome Back!</h2>
                            <h6 className="m-5">Login to continue</h6>
                        </div>
                    <div className='w-full h-full'>
                        <div className="card-body flex flex-col items-center">
                            <input type="text" placeholder="Enter Email here" className="input input-bordered input-lg bg-transparent w-full max-w-5xl border border-solid border-teal-500 mb-2 mt-5" />
                            <input type="text" placeholder="Enter Password here" className="input input-bordered input-lg bg-transparent w-full max-w-5xl border border-solid border-teal-500 mb-5 mt-5" />
                            <div className="card-actions w-full justify-between">
                                <button className="btn btn-wide btn-primary">Login In</button>
                                <button className="btn btn-wide btn-primary">Forgot Password</button>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>


    )
}

export default page