'use client';
import React, { useState } from 'react';

const Page = () => {
    // State to hold the selected salary value
    const [salary, setSalary] = useState(50000); // Default starting salary

    return (
        <div className="flex justify-center min-h-screen"> {/* Adjusted for vertical centering */}
            <div className="container mx-auto p-4 flex flex-col items-center m-10">
                <h1 className="text-xl font-semibold text-center mb-4">What is your minimum expected salary?</h1>
                <div className="flex flex-col items-center justify-center border w-1/3 border-teal-600 p-4 rounded-lg shadow mt-10"> {/* Centering the slider */}
                    <span className="text-lg mt-2 stat-value">${salary.toLocaleString()}K</span>
                    <input
                        type="range"
                        min="30000" // Minimum salary
                        max="200000" // Maximum salary
                        value={salary}
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className="w-full max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;
