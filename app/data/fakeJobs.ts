// Example job applications data

export interface JobApplication {
    id: number;
    companyName: string;
    jobTitle: string;
    status: 'Interested' | 'Applied' | 'Interview' | 'Offer' | 'Rejected';
    location: string;
}


export const initialApplications: JobApplication[] = [
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
  ];


  export const jobPostings = [
    {
      companyName: "Amazon",
      jobTitle: "Software Development Engineer",
      fields: "Software Engineering",
      experienceLevels: "Mid Level",
      locations: "Seattle, Washington, United States",
      postedDate: "3/9/2024, 8:00:00 AM",
      jobType: "Full Time"
    },
    {
      companyName: "Apple",
      jobTitle: "iOS Developer",
      fields: "Mobile Development",
      experienceLevels: "Senior Level",
      locations: "Cupertino, California, United States",
      postedDate: "3/7/2024, 10:00:00 AM",
      jobType: "Full Time"
    },

    {
      companyName: "Google",
      jobTitle: "Machine Learning Engineer",
      fields: "Machine Learning",
      experienceLevels: "Mid Level",
      locations: "Mountain View, California, United States",
      postedDate: "3/8/2024, 9:00:00 AM",
      jobType: "Full Time"
    },
    {
      companyName: "Microsoft",
      jobTitle: "Software Engineer Intern",
      fields: "Software Engineering",
      experienceLevels: "Mid Level",
      locations: "Redmond, Washington, United States",
      postedDate: "3/9/2024, 8:00:00 AM",
      jobType: "Intern"
    },

    {
      companyName: "Netflix",
      jobTitle: "Content Strategy Intern",
      fields: "Content Strategy",
      experienceLevels: "Entry Level",
      locations: "Los Gatos, California, United States",
      postedDate: "3/4/2024, 1:00:00 PM",
      jobType: "Intern"
    },
    {
      companyName: "Airbnb",
      jobTitle: "Marketing Intern",
      fields: "Marketing",
      experienceLevels: "Entry Level",
      locations: "San Francisco, California, United States",
      postedDate: "3/3/2024, 2:00:00 PM",
      jobType: "Intern"
    },
    {
      companyName: "Tesla",
      jobTitle: "Mechanical Engineering Intern",
      fields: "Mechanical Engineering",
      experienceLevels: "Entry Level",
      locations: "Fremont, California, United States",
      postedDate: "3/2/2024, 9:30:00 AM",
      jobType: "Intern"
    },
    {
      companyName: "Adobe",
      jobTitle: "Graphic Design Intern",
      fields: "Graphic Design",
      experienceLevels: "Entry Level",
      locations: "San Jose, California, United States",
      postedDate: "3/1/2024, 10:00:00 AM",
      jobType: "Intern"
    },
  
    {
      companyName: "Meta",
      jobTitle: "Front-End Engineer",
      fields: "Web Development",
      experienceLevels: "Mid Level",
      locations: "Menlo Park, California, United States",
      postedDate: "3/8/2024, 2:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "Tesla",
      jobTitle: "Embedded Software Engineer",
      fields: "Embedded Systems",
      experienceLevels: "Senior Level",
      locations: "Palo Alto, California, United States",
      postedDate: "3/9/2024, 11:00:00 AM",
      jobType: "Full Time"
    },
    {
      companyName: "Uber",
      jobTitle: "Data Scientist",
      fields: "Data Science",
      experienceLevels: "Mid Level",
      locations: "San Francisco, California, United States",
      postedDate: "3/7/2024, 3:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "Twitter",
      jobTitle: "Backend Engineer",
      fields: "Backend Development",
      experienceLevels: "Mid Level",
      locations: "San Francisco, California, United States",
      postedDate: "3/9/2024, 9:00:00 AM",
      jobType: "Full Time"
    },
    {
      companyName: "Salesforce",
      jobTitle: "Product Manager",
      fields: "Product Management",
      experienceLevels: "Senior Level",
      locations: "San Francisco, California, United States",
      postedDate: "3/8/2024, 4:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "IBM",
      jobTitle: "Data Engineer",
      fields: "Data Engineering",
      experienceLevels: "Mid Level",
      locations: "Austin, Texas, United States",
      postedDate: "3/9/2024, 1:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "Airbnb",
      jobTitle: "Full Stack Engineer",
      fields: "Full Stack Development",
      experienceLevels: "Senior Level",
      locations: "San Francisco, California, United States",
      postedDate: "3/7/2024, 5:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "Dropbox",
      jobTitle: "Software Engineer, Infrastructure",
      fields: "Infrastructure Engineering",
      experienceLevels: "Mid Level",
      locations: "San Francisco, California, United States",
      postedDate: "3/9/2024, 11:00:00 AM",
      jobType: "Full Time"
    },
    {
      companyName: "Oracle",
      jobTitle: "Java Developer",
      fields: "Java Development",
      experienceLevels: "Senior Level",
      locations: "Redwood City, California, United States",
      postedDate: "3/8/2024, 9:00:00 AM",
      jobType: "Full Time"
    },
    {
      companyName: "Stripe",
      jobTitle: "Software Engineer, Payments",
      fields: "Payments Engineering",
      experienceLevels: "Mid Level",
      locations: "San Francisco, California, United States",
      postedDate: "3/9/2024, 2:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "Nvidia",
      jobTitle: "Computer Vision Engineer",
      fields: "Computer Vision",
      experienceLevels: "Senior Level",
      locations: "Santa Clara, California, United States",
      postedDate: "3/7/2024, 4:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "Adobe",
      jobTitle: "UX Designer",
      fields: "User Experience Design",
      experienceLevels: "Mid Level",
      locations: "San Jose, California, United States",
      postedDate: "3/9/2024, 10:00:00 AM",
      jobType: "Full Time"
    },
    {
      companyName: "Snowflake",
      jobTitle: "Data Warehouse Engineer",
      fields: "Data Warehousing",
      experienceLevels: "Senior Level",
      locations: "San Mateo, California, United States",
      postedDate: "3/8/2024, 1:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "Zoom",
      jobTitle: "Video Infrastructure Engineer",
      fields: "Video Engineering",
      experienceLevels: "Mid Level",
      locations: "San Jose, California, United States",
      postedDate: "3/9/2024, 3:00:00 PM",
      jobType: "Full Time"
    },
    {
      companyName: "Coinbase",
      jobTitle: "Blockchain Engineer",
      fields: "Blockchain Development",
      experienceLevels: "Senior Level",
      locations: "San Francisco, California, United States",
      postedDate: "3/7/2024, 6:00:00 PM",
      jobType: "Full Time"
    }
  ];

