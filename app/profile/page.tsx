import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ProfileCard from "../components/profilecard/ProfileCard";
import ContactCard from "../components/contactcard/ContactCard";
import ResumeCard from "../components/resumecard/ResumeCard";
import ProjectCard from "../components/projectcard/ProjectCard";
import PortfolioCard from "../components/portfoliocard/PortfolioCard";
import SkillCard from "../components/skillcard/SkillCard";

const Page = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar with corrected prop */}
            <Sidebar props="Profile" />

     
            <div className="flex flex-col md:flex-row w-full px-4 md:px-10 py-4 overflow-auto text-white">

                <span className="w-full md:w-2/5 lg:w-1/3 xl:w-1/4 mr-0 md:mr-10 p-5 flex flex-col space-y-4">
                    <ProfileCard />
                    <ContactCard />
                </span>

          
                <div className="w-full flex flex-col space-y-4 p-5">
                    <ResumeCard />
                    
   
                    <section className="bg-white shadow rounded-lg p-4 md:p-5 text-gray-800 border border-gray-200">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Education</h2>
                        ...
                    </section>
                    
                    <ProjectCard />
                    <PortfolioCard />
                    <SkillCard />
                </div>

            </div>
        </div>
    );
};

export default Page;
