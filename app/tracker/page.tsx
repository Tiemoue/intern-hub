import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

const page = () => {
    return (
        <div className="flex h-screen ">
        <Sidebar props='Tracker' />
     <div className='flex w-full justify-center items-center'>
        <h1 className='text-7xl'>Tracker</h1>
        </div>
    </div>
  )
}

export default page