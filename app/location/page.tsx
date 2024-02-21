'use client';
import React, { useState } from 'react';

const page = () => {
    const locations = [
        "Atlanta", "Austin", "Boston", "Chicago", "Dallas", "Denver",
        "London", "Los Angeles", "Miami", "New York City", "Philadelphia",
        "Remote (in US)", "Remote (outside US)", "San Diego",
        "San Francisco Bay Area", "Seattle", "Toronto", "Vancouver",
        "Washington D.C."
    ];

    const [selectedLocations , setSelectedLocations] = useState<String[]>([]);

    const handleLocationChange = (location: string) => {
        if (selectedLocations.includes(location)) {
            setSelectedLocations(selectedLocations.filter(l => l !== location));
        } else {
            setSelectedLocations([...selectedLocations, location]);
        }
    };

    const handleSelectAll = (e: { target: { checked: any; }; }) => {
        if (e.target.checked) {
            setSelectedLocations(locations);
        } else {
            setSelectedLocations([]);
        }
    };

    const isAllSelected = locations.length === selectedLocations.length;

    return (
        <div className="container mx-auto my-8 p-4">
            <h1 className="text-xl font-semibold mb-4">Select Your Preferred Locations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locations.map((location, index) => (
                    <label key={index} className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className=''
                            checked={selectedLocations.includes(location)}
                            onChange={() => handleLocationChange(location)}
                        />
                        <span>{location}</span>
                    </label>
                ))}
                <label className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={handleSelectAll}
                    />
                    <span>Select All</span>
                </label>
            </div>
            <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700" onClick={() => console.log(selectedLocations)}> Save and Continue</button>
        </div>

    );
};

export default page;
