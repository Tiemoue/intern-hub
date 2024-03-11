"use client";
import React, { useState } from "react";
import Progressbar from "../components/progressbar/progressBar";
import SignUpNavBar from "../components/navbar/SignUpNavBar";
import Link from "next/link";

const Page = () => {
  const [salary, setSalary] = useState(50000); // Default starting salary

  return (
    <>
      <SignUpNavBar />
      <div className="mx-auto max-w-4xl">
        <Progressbar prog={90} />
      </div>

      <div className="flex justify-center items-center mt-15">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-semibold text-center">
            What is your minimum expected salary?
          </h1>
          <div className="mt-4 w-full">
            <label className="block text-sm font-medium text-gray-700">
              Selected Salary:{" "}
              <span className="font-semibold">${salary.toLocaleString()}</span>{" "}
              per year
            </label>
            <input
              type="range"
              min="30000"
              max="200000"
              value={salary}
              step="500" // Adjust step for finer control
              onChange={(e) => setSalary(Number(e.target.value))}
              className="mt-1 w-full h-2 bg-teal-200 rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-4 py-2 mt-3 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Finish
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
