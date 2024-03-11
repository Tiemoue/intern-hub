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
            <div className='mx-auto max-w-4xl'>
                <Progressbar prog={50} />
            </div>

            <div className="container mx-auto my-4 p-4">
                <h1 className="text-2xl font-semibold mb-4 text-center">Select Skills You Have or Enjoy Working With</h1>
                <div className="flex flex-wrap gap-2 p-4 justify-center items-center w-100">
                    {skills.map((skill, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${selectedSkills.includes(skill) ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-teal-700 hover:text-white transition-colors border border-black`}
                            onClick={() => handleSkillChange(skill)}
                        >
                            {skill}
                        </button>
                    ))}
                </div>
                <div className='text-center mt-5'>
                    <Link href="/role" className="inline-block mt-4 px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
                        Save and Continue
                    </Link>
                </div>

            </div>
        </>
    );
};

export default page;
