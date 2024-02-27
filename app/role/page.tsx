'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const RoleSelectionPage = () => {
    const roleLevels = [
        "Internship",
        "New Grad",
        "Junior",
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
        <div className="container mx-auto my-8 p-4">
            <h1 className="text-xl font-semibold mb-4 text-center">Select Your Preferred Role Levels</h1>
            <div className='mt-10'>
            <h2 className="text-lg font-semibold mb-2">What level of roles are you looking for?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {roleLevels.map((level, index) => (
                    <label key={index} className="flex items-center space-x-3">
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
            </div>
            <Link href="/salary" className="btn mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700" onClick={() => console.log(selectedRoleLevels)}> Save and Continue</Link>
        </div>
    );
};

export default RoleSelectionPage;
