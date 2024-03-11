import React from "react";
import { FaHourglassHalf, FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface JobCardProps {
  id: number;
  companyName: string;
  jobTitle: string;
  status: "Interested" | "Applied" | "Interview" | "Offer" | "Rejected";
  location: string;
  onUpdateStatus: (id: number, newStatus: JobCardProps["status"]) => void;
}

const statusColors = {
  Interested: "text-gray-400",
  Applied: "text-blue-500 animate-spin-slow", // Adding spinning animation for statuses where it makes sense
  Interview: "text-yellow-500 animate-spin-slow",
  Offer: "text-green-500",
  Rejected: "text-red-500",
};

const JobCard: React.FC<JobCardProps> = ({
  id,
  companyName,
  jobTitle,
  status,
  location,
  onUpdateStatus,
}) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as JobCardProps["status"];
    onUpdateStatus(id, newStatus);
  };

  const logoURL = `https://logo.clearbit.com/${companyName
    .toLowerCase()
    .replace(/\s+/g, "")}.com?size=70`;

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src={logoURL}
          onError={(e) => (e.currentTarget.src = "path/to/default/logo.png")} // Fallback for missing logos
          alt={`${companyName} Logo`}
          className="h-12 w-12 object-contain"
        />
        <div>
          <h3 className="text-md text-gray-600 truncate"> {jobTitle}</h3>
          <span className="text-sm  text-gray-600 flex items-center justify-start">
            {" "}
            <FaBuilding /> <span className="m-1"> {companyName} </span>{" "}
          </span>
          <span className="text-xs  text-gray-600 flex items-center justify-start">
            {" "}
            <FaLocationDot /> <span className="m-1"> {location} </span>{" "}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start sm:items-center">
        <span className={`${statusColors[status]} text-xl`}>
          {" "}
          <FaHourglassHalf />{" "}
        </span>
        <select
          className="form-select p-2 mt-4 sm:mt-0 sm:ml-4 text-sm block w-full sm:w-auto rounded-md border border-slate-600 shadow-sm"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="Interested">Interested</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
};

export default JobCard;