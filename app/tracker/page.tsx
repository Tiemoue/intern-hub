'use client';
import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import JobCard from '../components/jobstatus/jobCard';
import { FaSearch } from 'react-icons/fa';

interface JobApplication {
  id: number;
  companyName: string;
  jobTitle: string;
  status: 'Interested' | 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  location: string;
}

// Example job applications data
const initialApplications: JobApplication[] = [
  { id: 1, companyName: 'Google', jobTitle: 'Frontend Developer', status: 'Interested' , location: 'Mountain View, CA' },
  { id: 2, companyName: 'Meta', jobTitle: 'Backend Developer', status: 'Applied', location: 'Menlo Park, CA' },
  { id: 3, companyName: 'Amazon', jobTitle: 'Product Manager', status: 'Interview', location: 'Seattle, WA'},
  { id: 4, companyName: 'Microsoft', jobTitle: 'Data Scientist', status: 'Offer', location: 'Redmond, WA' },
  { id: 5, companyName: 'Apple', jobTitle: 'Software Engineer', status: 'Rejected', location: 'Cupertino, CA'},
  { id: 6, companyName: 'Netflix', jobTitle: 'Full Stack Developer', status: 'Interested', location: 'Los Gatos, CA' },
  { id: 7, companyName: 'Tesla', jobTitle: 'Mechanical Engineer', status: 'Applied', location: 'Palo Alto, CA' },
  { id: 8, companyName: 'Airbnb', jobTitle: 'UX Designer', status: 'Interested', location: 'San Francisco, CA' },
  { id: 9, companyName: 'Twitter', jobTitle: 'Data Analyst', status: 'Applied', location: 'San Francisco, CA' },
  { id: 10, companyName: 'LinkedIn', jobTitle: 'Product Designer', status: 'Interested', location: 'Sunnyvale, CA' },
  { id: 11, companyName: 'Uber', jobTitle: 'Software Engineer', status: 'Applied', location: 'San Francisco, CA' },
  { id: 12, companyName: 'Lyft', jobTitle: 'Data Scientist', status: 'Interested', location: 'San Francisco, CA' },
  { id: 13, companyName: 'Slack', jobTitle: 'Product Manager', status: 'Applied', location: 'San Francisco, CA' },
  { id: 14, companyName: 'Pinterest', jobTitle: 'UX Designer', status: 'Interested', location: 'San Francisco, CA' },
  { id: 15, companyName: 'Snapchat', jobTitle: 'Software Engineer', status: 'Applied', location: 'Los Angeles, CA' },
  { id: 16, companyName: 'TikTok', jobTitle: 'Data Analyst', status: 'Interested', location: 'Los Angeles, CA' },
  { id: 17, companyName: 'Zoom', jobTitle: 'Product Designer', status: 'Applied', location: 'San Jose, CA' },
  { id: 18, companyName: 'Salesforce', jobTitle: 'Software Engineer', status: 'Interested', location: 'San Francisco, CA' },
  { id: 19, companyName: 'Oracle', jobTitle: 'Data Scientist', status: 'Applied', location: 'Redwood City, CA' },
  { id: 20, companyName: 'IBM', jobTitle: 'Product Manager', status: 'Interested', location: 'San Jose, CA' },
  // Add more applications as needed
];
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

  const filteredApplications = applications.filter((application) => {
    const matchSearchTerm = application.companyName.toLowerCase().includes(searchTerm.toLowerCase()) || application.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus ? application.status === filterStatus : true;
    return matchSearchTerm && matchStatus;
  });

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar props='Tracker' />
      <div className="flex flex-col w-full ml-4 pr-4 py-4 overflow-auto">
        <h1 className="text-4xl text-black font-bold m-4">Your Submitted Applications</h1>
        <h2 className="text-black font-semibold mx-5 mb-4">{filteredApplications.length} Total Applications</h2>
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
          {filteredApplications.map((app, index) => (
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

          {filteredApplications.length === 0 && (
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