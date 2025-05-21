import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Sri Raghu Charan Anala</h3>
            <p className="text-gray-400">
              Python Developer | C Programmer | SQL Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a 
              href="#certifications" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Sri Raghu Charan Anala. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">Made with</span>
            <Heart size={16} className="text-red-500 mr-2" />
            <span className="text-gray-400">using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;