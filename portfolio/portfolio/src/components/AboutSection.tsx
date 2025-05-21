import React from 'react';
import { Code, Database, Terminal, Brain } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Hello! I'm Sri Raghu Charan Anala, a passionate technologist with a strong foundation in programming 
              and data management. My journey in technology has equipped me with skills in Python, C, SQL, 
              and basic knowledge of HTML and Java.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Beyond technical skills, I'm an active member of my college's NSS (National Service Scheme) unit, 
              where I contribute to community service initiatives. I'm also proud to be part of Leo Club, 
              where leadership, experience, and opportunity converge.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm particularly enthusiastic about generative AI tools and websites, exploring how these 
              technologies can transform industries and create new possibilities. I'm constantly expanding 
              my knowledge through certifications and hands-on projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Programming
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Used C and Python for problem solving, data structures, and developing efficient algorithms
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Data Management
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Skilled in SQL for database management, query optimization, and data analysis.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Web Technologies
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Basic understanding of HTML and Java, constantly expanding my knowledge in web development.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Generative AI
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Enthusiastic about generative AI tools and their applications in various domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;