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
        "Mid",
        "Senior",
        "Lead"
    ];

    const [selectedRoleLevels, setSelectedRoleLevels] = useState(new Set<String>());

    const handleRoleLevelChange = (level: string) => {
        setSelectedRoleLevels(prevSelected => {
            const newSelected = new Set(prevSelected); // Create a shallow copy
            if (newSelected.has(level)) {
                newSelected.delete(level);
            } else {
                newSelected.add(level);
            }
            return newSelected;
        });
    };

    return (
        <>
            <SignUpNavBar />
            <div className='mx-auto max-w-4xl'>
                <Progressbar prog={75} />
            </div>

            <div className="container mx-auto my-4 p-4">
                <h1 className="text-2xl font-semibold mb-4 text-center">Select Your Preferred Role Levels</h1>
                <div className='mt-10 flex justify-center items-center flex-wrap gap-4'>
                    {roleLevels.map((level, index) => (
                        <button
                            key={index}
                            onClick={() => handleRoleLevelChange(level)}
                            className={`px-6 py-2 border ${selectedRoleLevels.has(level) ? 'bg-teal-800 text-white' : 'bg-white text-teal-600 border-teal-600'} rounded transition-all ease-in-out duration-150`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <Link href="/salary"
                        className="btn mt-4 px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors" onClick={() => console.log(Array.from(selectedRoleLevels))}>
                        Save and Continue

                    </Link>
                </div>
            </div>
        </>
    );
};

export default RoleSelectionPage;
