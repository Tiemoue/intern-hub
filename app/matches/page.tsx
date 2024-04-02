'use client';
import React from 'react'
import { jobPostings } from "../data/fakeJobs";
import { useState } from 'react';
import JobPostingCard from "../components/jobposting/JobPostingCard";
import Sidebar from '../components/sidebar/Sidebar';


const page = () => {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredJobs, setFilteredJobs] = useState(jobPostings);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = jobPostings.filter(
      (job) =>
        job.companyName.toLowerCase().includes(query) ||
        job.jobTitle.toLowerCase().includes(query)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar props='Matches' />
      <div className='flex flex-col w-full ml-4 pr-4 py-4 overflow-auto'>
        <div className="p-8">
          <div className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by company or job title..."
              className="input input-bordered border border-slate-500 w-full bg-gray-200"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job, index) => (
              <div key={index} className="m-4 min-w-max">
                <JobPostingCard {...job}
                />
              </div>
            ))}
            {filteredJobs.length === 0 && (
              <p>No jobs found matching your search criteria.</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default page