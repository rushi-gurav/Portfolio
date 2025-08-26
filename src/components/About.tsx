import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'React', 'Node.js', 
    'HTML', 'CSS', 'Tailwind CSS', 'JavaScript',
    'Git', 'Figma', 'UI/UX Design', 'AI Prompting',
    'MERN Stack', ' Express', 'Python', 'java basics'
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section: Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.img
              src="src/components/me.JPG" // Replace with actual image path
              alt="Your Name"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-gray-700"
            />
          </motion.div>

          {/* Right Section: Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6">
              I'm Rushikesh Nandkumar Gurav, a computer engineering student passionate about web development and software engineering. I specialize in creating interactive web applications and am eager to explore AI and machine learning.
            </p>
            <p className="text-gray-300 mb-6">
              I bridge the gap between aesthetics and functionality, creating immersive digital experiences.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies or sketching ideas for my next creative endeavor.
            </p>
          </motion.div>
        </div>

        {/* Skills & Experience Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} className="text-purple-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">Development</h4>
                <p className="text-gray-300">
                  Building performant, accessible, and beautiful digital experiences.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb size={24} className="text-blue-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">Innovation</h4>
                <p className="text-gray-300">
                  Exploring new technologies and creative solutions to complex problems.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase size={24} className="text-purple-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">Experience</h4>
                <p className="text-gray-300">
                  Fresher.<br />
                  Working on various projects.<br />
                  5+ Projects Experience in AI and MERN Stack.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
