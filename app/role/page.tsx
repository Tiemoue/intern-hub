'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Progressbar from '../components/progressbar/progressBar';
import SignUpNavBar from '../components/navbar/SignUpNavBar';

const RoleSelectionPage = () => {
    const roleLevels = [
        "Internship",
        "New Grad",
        "Junior",
        "Mid", "Senior", "Lead"
    ];

    const [selectedRoleLevels, setSelectedRoleLevels] = useState<String[]>([]);

    const handleRoleLevelChange = (level: string) => {
        if (selectedRoleLevels.includes(level)) {
            setSelectedRoleLevels(selectedRoleLevels.filter(l => l !== level));
        } else {
            setSelectedRoleLevels([...selectedRoleLevels, level]);
        }
    };

    return (
        <>
          <SignUpNavBar />

            <div className='mx-40'>
                <Progressbar prog={75} />
            </div>

            <div className="container mx-auto my-4 p-4">
                <h1 className="text-2xl font-semibold mb-4 text-center">Select Your Preferred Role Levels</h1>
                <div className='mt-10 flex justify-center items-center flex-col'>
                    <h2 className="text-lg font-semibold mb-5">What level of roles are you looking for?</h2>
                    <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
                        {roleLevels.map((level, index) => (
                            <label key={index} className="flex justify-center items-center text-center space-x-3">
                                <input
                                    type="checkbox"
                                    className=''
                                    checked={selectedRoleLevels.includes(level)}
                                    onChange={() => handleRoleLevelChange(level)}
                                />
                                <span>{level}</span>
                            </label>
                        ))}
                    </div>
                </div >
                <div className='flex justify-center items-center mt-10'>
                <Link href="/salary" className="btn mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700" onClick={() => console.log(selectedRoleLevels)}> Save and Continue</Link>
                </div>
            </div>
        </>
    );
};

export default RoleSelectionPage;
