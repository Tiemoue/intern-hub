'use client';
import JobPostingCard from "../components/jobposting/JobPostingCard";
import Sidebar from "../components/sidebar/Sidebar";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { jobPostings } from "./jobs";


export default function Dashboard() {
    // State and functions for handling sidebar logic can go here


    return (
        <div className="flex h-screen">
            <div>
                <Sidebar props="Dashboard" />
            </div>

            <div className="flex flex-col w-full ml-10">
                <div className="flex flex-col md:flex-row w-full justify-between p-4 md:p-10 md:gap-16">
                    <div>
                        <h1 className="text-4xl text-black font-bold m-2">
                            Welcome Back, Collins!
                        </h1>
                        <h2 className="text-black font-semibold m-2">
                            Check out your top matches and saved jobs down below!
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-5 space-y-4 md:space-y-0 md:space-x-4">
                            <button
                                style={{ background: "#f7b59f" }}
                                className="btn btn-active rounded-full text-black border border-black"
                            >
                                View Matches
                            </button>
                            <button
                                style={{ background: "#f7b59f" }}
                                className="btn btn-active rounded-full text-black border border-black"
                            >
                                Change Preferences
                            </button>
                        </div>
                    </div>

                    <div
                        style={{ background: "#f7b59f" }}
                        className="bg-slate-300 shadow-xl w-64 h-3/6 mx-auto my-6 p-4 md:mr-8 border border-black rounded-lg"
                    >
                        <div>
                            <span className="flex items-center text-3xl justify-evenly">
                                <AiOutlineFolderOpen />
                                <span className="text-lg inline text-black font-bold">
                                    {" "}
                                    Application: 20
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start flex-col mx-8">
                    <h4 className="text-lg text-black font-bold m-2">Your Top Matches</h4>

                    <div className="flex justify-start flex-wrap">
                        <div className="m-4 min-w-max">
                            <JobPostingCard
                                companyName="Google"
                                jobTitle="UX Researcher, Google Cloud"
                                fields="User Experience Researcher"
                                experienceLevels="Entry Level/New Grad"
                                locations="California, United States"
                                postedDate="3/8/2024, 6:31:31 PM"
                                jobType="Full Time"
                            />
                        </div>

                        <div className="m-4 min-w-max">
                            <JobPostingCard
                                companyName="Microsoft"
                                jobTitle="Software Engineer II"
                                fields="Software Engineering"
                                experienceLevels="Mid Level"
                                locations="Redmond, Washington, United States"
                                postedDate="3/9/2024, 8:00:00 AM"
                                jobType="Full Time"
                            />
                        </div>

                        <div className="m-4 min-w-max">
                            <JobPostingCard
                                companyName="Netflix"
                                jobTitle="Software Engineer"
                                fields="Software Engineering"
                                experienceLevels="Mid Level"
                                locations="Los Gatos, California, United States"
                                postedDate="3/9/2024, 8:00:00 AM"
                                jobType="Full Time"
                            />
                        </div>

                    </div>
                </div>

                <div className="flex flex-col mx-8">
                    <h4 className="text-lg text-black font-bold m-2">Recently Posted Jobs</h4>
                    <div className="flex justify-center items-center">
                        <span className="text-sm m-2">
                            Browse the jobs and job list pages to find and save new exciting
                            roles!
                        </span>

                        <div className="flex flex-col sm:flex-row gap-4 m-2">
                            <button style={{ background: "#f7b59f" }} className="btn btn-outline rounded-lg">View Jobs</button>
                        </div>
                    </div>

                    <div className="flex justify-start flex-wrap">
                        {jobPostings.map((job, index) => (
                            <div key={index} className="m-4 min-w-max">
                                <JobPostingCard
                                    companyName={job.companyName}
                                    jobTitle={job.jobTitle}
                                    fields={job.fields}
                                    experienceLevels={job.experienceLevels}
                                    locations={job.locations}
                                    postedDate={job.postedDate}
                                    jobType={job.jobType}
                                />
                            </div>

                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
