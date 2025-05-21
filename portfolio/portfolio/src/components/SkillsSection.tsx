import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 85, category: 'Programming', color: 'bg-blue-600' },
    { name: 'C', level: 70, category: 'Programming', color: 'bg-indigo-600' },
    { name: 'SQL', level: 75, category: 'Database', color: 'bg-purple-600' },
    { name: 'HTML', level: 55, category: 'Web Development', color: 'bg-orange-600' },
    { name: 'Java', level: 40, category: 'Programming', color: 'bg-red-600' },
    { name: 'Generative AI', level: 60, category: 'Artificial Intelligence', color: 'bg-green-600' },
    { name: 'Problem Solving', level: 65, category: 'Soft Skills', color: 'bg-yellow-600' },
    { name: 'Team Collaboration', level: 85, category: 'Soft Skills', color: 'bg-pink-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A combination of technical expertise and soft skills that drive my work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`${skill.color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {skill.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Technical Proficiency
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My technical foundation is built on a solid understanding of programming fundamentals, 
              algorithmic thinking, and database management. I'm comfortable working with Python and C 
              for software development, SQL for data operations, and have basic knowledge of web technologies.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Areas of Interest
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm particularly interested in the intersection of traditional programming and emerging 
              AI technologies, especially generative AI. I'm constantly exploring how these tools can 
              be applied to create innovative solutions across different domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;