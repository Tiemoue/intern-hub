import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';

type JobPostingCardProps = {
  companyName: string;
  jobTitle: string;
  fields: string;
  experienceLevels: string;
  locations: string;
  postedDate: string;
  jobType: string;
};

const JobPostingCard = ({
  companyName,
  jobTitle,
  fields,
  experienceLevels,
  locations,
  postedDate,
  jobType,
}: JobPostingCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex flex-col w-full items-center justify-between p-4">
      <div className="card w-80 max-w-md bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-2">
        <div className="flex items-center space-x-4 p-4">
          <img
            src={`https://logo.clearbit.com/${companyName.toLowerCase()}.com?size=70`}
            alt={`${companyName} Logo`}
            className="h-12 w-12 object-contain"
          />
          <div>
            <h2 className="card-title text-lg font-semibold">{companyName}</h2>
            <p className="text-sm text-gray-600">{jobTitle}</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-gray-100">
          <div className="flex justify-between items-center">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full text-white ${jobType === 'Intern' ? 'bg-blue-500' : 'bg-green-500'}`}>
              {jobType}
            </span>
            <span onClick={toggleExpanded} className="cursor-pointer transition-transform duration-200 transform" aria-label="Expand details">
              <span className={`${isExpanded ? 'transform rotate-180' : ''} text-xl`}><MdExpandMore /></span>
            </span>
          </div>
        </div>

        {isExpanded && (
          <div className="p-4">
            <ul className="text-sm">
              <li><strong>Field(s):</strong> {fields}</li>
              <li><strong>Experience Level(s):</strong> {experienceLevels}</li>
              <li><strong>Location(s):</strong> {locations}</li>
              <li><strong>Posted:</strong> {postedDate}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPostingCard;
