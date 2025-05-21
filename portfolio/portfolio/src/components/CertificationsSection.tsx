import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credential: string;
}

const CertificationsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Python Programming',
      issuer: 'HACKERRANK',
      date: 'OCTOBER 2024',
      description: 'Comprehensive course covering Python fundamentals, data structures, and advanced programming concepts.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'OOP'],
      credential: 'https://www.hackerrank.com/certificates/iframe/b6a83d7f6155',
    },
    {
      id: 2,
      title: 'SQL Database Management',
      issuer: 'HACKERRANK',
      date: 'MARCH 2025',
      description: 'In-depth training on SQL database design, optimization, and management techniques.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Modeling'],
      credential: 'https://www.hackerrank.com/certificates/iframe/5cadbd746114',
    },
    {
      id: 3,
      title: 'DATA VISUALIZATION',
      issuer: 'TATA',
      date: 'APRIL 2025',
      description: 'Empowering Business with effective insights.',
      skills: ['Data visualization', 'Analytics & Insights', 'Visual basics', 'Data Analysis'],
      credential: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_85jeuAqtaCjNBGg9s_1743921167325_completion_certificate.pdf',
    },

  ];

  const nextCertificate = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Carousel navigation */}
          <button 
            onClick={prevCertificate}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:-left-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextCertificate}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:-right-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Certificate carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {certificates.map((cert) => (
                <div key={cert.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                        <Award size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href={cert.credential} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <span className="mr-2">View Credential</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;