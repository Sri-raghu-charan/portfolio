import React from 'react';
import { Users, Award, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Active Member',
      organization: 'National Service Scheme (NSS)',
      period: '2023 - Present',
      location: 'College Unit',
      description: [
        'Participated in community service initiatives aimed at developing personality through community service',
        'Contributed to various social welfare programs including health camps, environmental awareness drives, and educational outreach',
        'Developed leadership and teamwork skills while working on diverse projects',
        'Engaged in rural development activities and awareness campaigns'
      ],
      icon: <Users size={24} />,
      color: 'bg-green-600 dark:bg-green-500',
    },
    {
      title: 'Member',
      organization: 'Leo Club',
      period: '2023 - Present',
      location: 'College Chapter',
      description: [
        'Actively involved in a youth organization focused on leadership, experience, and opportunity',
        'Participated in community service projects and humanitarian initiatives',
        'Collaborated with team members to organize events and awareness programs',
        'Developed communication and organizational skills through various club activities'
      ],
      icon: <Award size={24} />,
      color: 'bg-yellow-600 dark:bg-yellow-500',
    },
    {
title: 'Data Visualization Intern (virtual experience)',
  organization: 'TATA (via forage platform)',
  period: '2025', // Adjust the dates based on your actual internship duration
  location: 'online', // Adjust based on your internship's location
  description: [
    'Completed a 4–5 hour virtual experience simulating the role of a data visualization intern.',
    'Collaborated with data scientists and analysts to visualize complex datasets for business insights',
    'Developed custom data visualization solutions using tools like Tableau, Power BI, or D3.js',
    'Contributed to reports and presentations for clients using compelling visuals to support decision-making'
  ],
  icon: <Calendar size={24} />, // You can change the icon to something more relevant like a bar chart or pie chart
  color: 'bg-blue-600 dark:bg-blue-500', // You can use any color that suits the theme
}
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Experience & Activities
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My journey through various organizations and community engagements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row mb-16 md:mb-10 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-400 z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} pl-10 md:pl-0`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:translate-y-[-5px] transition-transform duration-300">
                    <div className={`w-12 h-12 ${exp.color} rounded-full flex items-center justify-center text-white mb-4`}>
                      {exp.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {exp.title} at {exp.organization}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Key Takeaways
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Through my involvement in NSS and Leo Club, I've gained valuable experience in team collaboration, 
              project management, and community engagement. These experiences have enhanced my leadership abilities 
              and interpersonal skills, complementing my technical knowledge.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These activities have taught me the importance of applying technology and knowledge for social good, 
              and how technical skills can be leveraged to address real-world challenges in communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;