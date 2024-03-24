import React from 'react'

const PortfolioCard = () => {

    var companyName = "linkedin";

    const logoURL = (companyName: string) => {
        return `https://logo.clearbit.com/${companyName
            .toLowerCase()
            .replace(/\s+/g, "")}.com?size=70`;
    };

    const linkedInUrl = "https://www.linkedin.com/in/collins-ikpeyi-7b3b3b1b3/";
    const githubUrl = "https://github.com/Tiemoue?tab=repositories";

    return (
        <div className="bg-white shadow rounded-lg p-4 md:p-5 my-4 text-gray-800 border border-gray-200">
            <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                Portfolio
            </h2>

            {/* LinkedIn Section */}
            <div className="flex items-center space-x-4 mb-4">
                <img
                    // Fallback to a default image if Clearbit does not have the logo
                    src={logoURL("linkedin")}
                    alt={`${companyName} Logo`}
                    className="h-12 w-12 object-contain"
                />
                <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                >
                    LinkedIn Profile
                </a>

            </div>

            {/* GitHub Section */}
            <div className="flex items-center space-x-4">
                <img
                    src={logoURL("github")}
                    alt="GitHub Logo"
                    className="h-12 w-12 object-contain"
                />
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-700"
                >
                    GitHub Profile
                </a>
            </div>
        </div>
    )
}

export default PortfolioCard