import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactCard = () => {

  return (
    <div>
    <div className="card bg-base-100 shadow-xl p-4 md:p-5 rounded-lg text-gray-800 border border-gray-200">
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-xs md:text-sm font-bold">
        Contact Information
      </h2>
      <div className="flex items-center space-x-2">
        <FaEnvelope />
        <span className="text-xs md:text-sm">iXXXXXX@gmail.com</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaPhone />
        <span className="text-xs md:text-sm">(615) XXX-XXX-XXXX</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt />
        <span className="text-xs md:text-sm">Nashville, TN, USA</span>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ContactCard;