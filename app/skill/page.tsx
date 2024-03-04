'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Progressbar from '../components/progressbar/progressBar';
import SignUpNavBar from '../components/navbar/SignUpNavBar';

const page = () => {
    const skills = [
        "JavaScript", "Python", "React", "Node.js", "Django", "Ruby on Rails",
        "SQL", "NoSQL", "Cloud Services (AWS, GCP, Azure)", "Docker", "Kubernetes",
        "Machine Learning", "Data Analysis", "UI/UX Design", "Graphic Design",
        "Project Management", "Agile Methodologies", "C++", "Java", "Swift",
        "Kotlin", "Flutter", "React Native", "Angular", "Vue.js", "PHP", "Laravel",
        "WordPress", "SEO Optimization", "Content Creation", "Social Media Marketing",
        "Cybersecurity", "Blockchain", "Artificial Intelligence", "Data Science",
        "Electrical Engineering", "Mechanical Design", "3D Modeling"
    ];

    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const handleSkillChange = (skill: string) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(s => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
        console.log(selectedSkills);
    };

    return (
        <>
          <SignUpNavBar />
        
           <div className='mx-40'>
                <Progressbar prog={50} />
            </div>
          

            <div className="container mx-auto my-4 p-4">
                <h1 className="text-2xl font-semibold mb-4 text-center">Select a Skill You Have or Enjoy Working With</h1>
                <div className='flex items-center p-4'>
                    <div className='flex-grow'>
                        <select
                            className="select select-success w-full max-w-xs bg-transparent"
                            onChange={(e) => handleSkillChange(e.target.value)}
                        >
                            <option disabled defaultValue="">Select a skill</option>
                            {skills.map((skill, index) => (
                                <option key={index} value={skill}>{skill}</option>
                            ))}
                        </select>
                        <div className='mt-5'>
                            <Link href="/role"
                                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">Save and Continue
                            </Link>
                        </div>
                    </div>

                    {/* Invisible Spacer */}
                    <div className='flex-grow-0'></div>

                    <div className='w-96 overflow-hidden rounded-2xl border shadow-xl  p-4 flex-none'>
                        <h2 className="text-lg font-semibold text-center">Selected Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {selectedSkills.map((skill, index) => (
                                <button key={index} className="bg-teal-600 hover:bg-teal-700 text-gray-50 text-start text-xs px-2 py-1 rounded overflow-auto inline-flex items-center justify-start">
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
