'use client';
import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import JobCard from '../components/jobstatus/jobCard';
import { FaSearch } from 'react-icons/fa';
import { JobApplication, initialApplications } from '../data/fakeJobs';


const Page = () => {
  const [applications, setApplications] = useState<JobApplication[]>(initialApplications);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };


  const getSortedAndFilteredApplications = () => {
    const filtered = applications.filter((application) => {
      const matchSearchTerm = application.companyName.toLowerCase().includes(searchTerm.toLowerCase()) || application.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = filterStatus ? application.status === filterStatus : true;
      return matchSearchTerm && matchStatus;
    });

    const sorted = filtered.sort((a, b) => {
      if (a.status === "Rejected" && b.status !== "Rejected") {
        return 1;
      } else if (a.status !== "Rejected" && b.status === "Rejected") {
        return -1;
      }
      return 0;
    });

    return sorted;
  };

  const sortedAndFilteredApplications = getSortedAndFilteredApplications();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar props='Tracker' />
      <div className="flex flex-col w-full ml-4 pr-4 py-4 overflow-auto">
        <h1 className="text-4xl text-black font-bold m-4">Your Submitted Applications</h1>
        <h2 className="text-black font-semibold mx-5 mb-4">{sortedAndFilteredApplications.length} Total Applications</h2>
        <div className="mb-4 flex  justify-between p-4">
          <div className='w-full '>
            <input
              type="text"
              placeholder="Search by company or title..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="input input-bordered w-full bg-gray-200 border border-slate-500"
            />
          </div>
          <div className='w-1/3 mx-10'>
            <select
              value={filterStatus}
              onChange={handleFilterChange}
              className="select select-bordered w-full max-w-xs bg-gray-200 border border-slate-500"
            >

              <option value="">All Statuses</option>
              <option value="Interested">Interested</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
        <ul className='m-4'>
          {sortedAndFilteredApplications.map((app, index) => (
            <li key={index} className="bg-white shadow rounded-lg mb-4 border">
              <JobCard {...app} onUpdateStatus={(id, newStatus) => {
                const updatedApplications = applications.map((application) => {
                  if (application.id === id) {
                    return { ...application, status: newStatus };
                  }
                  return application;
                });
                setApplications(updatedApplications);
              }
              } />
            </li>
          ))}

          {sortedAndFilteredApplications.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className='mb-5'> <FaSearch size={32} />  </span>
              <p>No applications found matching your search criteria.</p>
            </div>
          )}

        </ul>
      </div>
    </div >
  );
};

export default Page;